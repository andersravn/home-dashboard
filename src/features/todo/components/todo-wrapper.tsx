"use client";

import { FC, ReactNode, useState } from "react";
import { StartScreen } from "./start-screen";
import { TodoList } from "./todo-list";
import { Item } from "@/shared/lib/types";

type TodoWrapperProps = {
  todos: Item[];
  forecast: ReactNode;
};

export const TodoWrapper: FC<TodoWrapperProps> = ({ todos, forecast }) => {
  const [timerStarted, setTimerStarted] = useState(false);

  return (
    <>
      <StartScreen forecast={forecast} onStart={() => setTimerStarted(true)} />
      <TodoList todos={todos} timerStarted={timerStarted} />
    </>
  );
};
