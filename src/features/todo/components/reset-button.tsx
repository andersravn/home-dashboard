"use client";

import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { FC } from "react";

export const ResetButton: FC = () => {
  const [, setCheckedItems] = useQueryState(
    "checkedItems",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const reset = async () => {
    await setCheckedItems([]);
    window.location.reload();
  };

  return (
    <button
      onClick={reset}
      className={`px-2 py-1 w-fit rounded text-white bg-gray-500`}
    >
      Reset
    </button>
  );
};
