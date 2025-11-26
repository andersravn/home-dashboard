"use client";

import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { FC } from "react";

export const ResetButton: FC = () => {
  const [, setCheckedItems] = useQueryState(
    "checkedItems",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [avatar, setAvatar] = useQueryState("avatar", parseAsString);

  const reset = async () => {
    await setCheckedItems([]);
    await setAvatar(null);
    window.location.reload();
  };

  // Only show reset button when avatar is selected (in game mode)
  if (!avatar) return null;

  return (
    <button
      onClick={reset}
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white bg-gray-500 hover:bg-gray-600 shadow-lg`}
    >
      Reset
    </button>
  );
};
