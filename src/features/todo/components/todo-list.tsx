"use client";

import { FC, useEffect, useRef, useState } from "react";
import { Item } from "@/shared/lib/types";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { GameModeItem } from "./game-mode-item";
import ConfettiComponent from "@/components/confetti";
import { Timer } from "./timer";

type TodoListProps = {
  todos: Item[];
  timerStarted?: boolean;
};

export const TodoList: FC<TodoListProps> = ({
  todos,
  timerStarted: timerStartedProp = false,
}) => {
  const [checkedTodos] = useQueryState(
    "checkedItems",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [avatar] = useQueryState("avatar", parseAsString.withDefault("🎉"));
  const [showConfetti, toggleConfetti] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const ref = useRef<HTMLUListElement | null>(null);

  const isCompleted = checkedTodos?.length === todos.length && todos.length > 0;

  // Start timer when prop changes to true
  useEffect(() => {
    if (timerStartedProp && !timerStarted) {
      setTimerStarted(true);
    }
  }, [timerStartedProp, timerStarted]);

  function onCheck() {
    ref.current?.scrollBy({
      left: document.body.clientWidth - 32,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (isCompleted) {
      toggleConfetti(true);
      setConfettiKey((prev) => prev + 1);
    }
  }, [isCompleted]);

  function handleEmojiClick() {
    if (isCompleted) {
      setConfettiKey((prev) => prev + 1);
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-500 to-purple-600 overflow-y-auto p-8">
      <Timer
        isRunning={timerStarted && !isCompleted}
        isCompleted={isCompleted}
      />
      <ul
        className="flex gap-x-8 overflow-scroll snap-x snap-mandatory"
        ref={ref}
      >
        {todos.map((todo) => (
          <li className="capitalize" key={todo.name}>
            <GameModeItem todo={todo} onCheck={() => onCheck()} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button
          onClick={handleEmojiClick}
          className={`text-6xl md:text-9xl ${
            isCompleted
              ? "animate-spin cursor-pointer hover:scale-110 transition-transform"
              : "animate-bounce"
          }`}
          disabled={!isCompleted}
        >
          {avatar}
        </button>
      </div>
      {showConfetti && <ConfettiComponent key={confettiKey} />}
    </div>
  );
};
