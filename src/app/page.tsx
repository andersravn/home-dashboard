import Forecast from "@/features/weather/components/forecast";
import { TodoList } from "@/features/todo/components/todo-list";
import { GameModeButton } from "@/features/todo/components/game-mode-button";
import { getItems } from "@/features/todo/api/get-items";
import { shouldShowItem } from "@/features/todo/lib/should-show-item";
import { AvatarSelecter } from "@/features/todo/components/avatar-selecter";
import { ResetButton } from "@/features/todo/components/reset-button";
import { Suspense } from "react";

export default async function Home() {
  const items = await getItems();
  const todos = [];

  for (const item of items) {
    if (await shouldShowItem(item)) {
      todos.push(item);
    }
  }
  return (
    <div className="flex flex-col gap-y-12 p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <AvatarSelecter />
        <Forecast />
        <div className="flex gap-4">
          <GameModeButton />
          <ResetButton />
        </div>
        <TodoList todos={todos} />
      </Suspense>
    </div>
  );
}
