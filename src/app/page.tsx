import Forecast from "@/features/weather/components/forecast";
import { getItems } from "@/features/todo/api/get-items";
import { shouldShowItem } from "@/features/todo/lib/should-show-item";
import { AvatarSelecter } from "@/features/todo/components/avatar-selecter";
import { ResetButton } from "@/features/todo/components/reset-button";
import { TodoWrapper } from "@/features/todo/components/todo-wrapper";
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
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TodoWrapper todos={todos} forecast={<Forecast />} />
        <AvatarSelecter />
        <ResetButton />
      </Suspense>
    </div>
  );
}
