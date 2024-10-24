"use client";

import { FC } from "react";
import Image from "next/image";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Item } from "@/shared/lib/types";

type TodoItemProps = {
  todo: Item;
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
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
      setCheckedTodos([...checkedTodos, todoName]);
    }
  }

  return (
    <label className="flex items-center gap-x-4">
      {todo.image ? (
        <div>
          <Image
            src={todo.image?.src}
            alt={todo.image?.alt}
            width={todo.image?.width}
            height={todo.image?.height}
          />
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
        className="h-12 w-12 rounded"
      />{" "}
    </label>
  );
};
