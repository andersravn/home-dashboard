"use client";

import { parseAsBoolean, useQueryState } from "nuqs";
import { FC } from "react";

export const GameModeButton: FC = () => {
  const [gameMode, setGameMode] = useQueryState("gameMode", parseAsBoolean);
  const [, toggleAvatarSelecter] = useQueryState(
    "showAvatarSelecter",
    parseAsBoolean
  );

  function toggleGameMode() {
    if (gameMode) {
      setGameMode(false);
    } else {
      toggleAvatarSelecter(true);
      setGameMode(true);
    }
  }

  return (
    <button
      onClick={() => toggleGameMode()}
      className={`px-2 py-1 w-fit rounded text-white ${
        gameMode ? "bg-red-500" : "bg-green-700"
      }`}
    >
      Game mode: {gameMode ? "On" : "Off"}
    </button>
  );
};
