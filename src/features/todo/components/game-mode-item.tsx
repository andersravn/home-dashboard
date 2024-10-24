"use client";

import { FC } from "react";
import Image from "next/image";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Item } from "@/shared/lib/types";

type TodoItemProps = {
  todo: Item;
  onCheck: () => void;
};

export const GameModeItem: FC<TodoItemProps> = ({ todo, onCheck }) => {
  const [checkedTodos, setCheckedTodos] = useQueryState(
    "checkedItems",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  function onCheckboxChange(todoName: string) {
    if (checkedTodos.includes(todoName)) {
      setCheckedTodos(
        checkedTodos.filter((checkedTodo) => checkedTodo !== todoName)
      );
    } else {
      onCheck();
      setCheckedTodos([...checkedTodos, todoName]);
    }
  }

  return (
    <div className="relative z-0 flex flex-col items-center xl:w-screen">
      <label className="flex items-center justify-start gap-x-4 snap-center w-[calc(100vw-4rem)] xl:max-w-[300px] xl:mx-auto">
        {todo.image ? (
          <div className="relative aspect-square w-full">
            <Image src={todo.image?.src} alt={todo.image?.alt} fill />
            <span>{todo.name}</span>
          </div>
        ) : (
          <span className="text-2xl">
            {todo.name} {todo.icon}
          </span>
        )}
        <input
          type="checkbox"
          defaultChecked={checkedTodos.includes(todo.name)}
          onClick={() => onCheckboxChange(todo.name)}
          className="h-12 w-12 rounded absolute inset-0 m-auto"
        />{" "}
      </label>
    </div>
  );
};
