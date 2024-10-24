"use client";

import { FC, useEffect, useRef, useState } from "react";
import { TodoItem } from "./todo-item";
import { Item } from "@/shared/lib/types";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { GameModeItem } from "./game-mode-item";
import ConfettiComponent from "@/components/confetti";

type TodoListProps = {
  todos: Item[];
};

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  const [gameMode] = useQueryState("gameMode");
  const [checkedTodos] = useQueryState(
    "checkedItems",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [avatar] = useQueryState("avatar", parseAsString.withDefault("🎉"));
  const [showConfetti, toggleConfetti] = useState(false);
  const ref = useRef<HTMLUListElement | null>(null);

  function onCheck() {
    ref.current?.scrollBy({
      left: document.body.clientWidth,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (checkedTodos?.length === todos.length) {
      toggleConfetti(true);
    }
  }, [checkedTodos, todos]);

  if (!gameMode) {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-4">Husk</h1>
        <ul className="flex flex-col gap-y-8">
          {todos.map((todo) => (
            <li className="capitalize" key={todo.name}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="flex gap-x-8 overflow-scroll snap-x" ref={ref}>
          {todos.map((todo) => (
            <li className="capitalize" key={todo.name}>
              <GameModeItem todo={todo} onCheck={() => onCheck()} />
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <span className="text-6xl animate-bounce">{avatar}</span>
        </div>
        {showConfetti && <ConfettiComponent />}
      </div>
    );
  }
};
