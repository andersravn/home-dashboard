"use client";

import { parseAsString, useQueryState } from "nuqs";
import { FC, ReactNode, useState, useEffect } from "react";

const ALL_AVATARS = [
  "🦄",
  "🐶",
  "🐱",
  "🐭",
  "💩",
  "🐉",
  "⛄️",
  "🤖",
  "🦊",
  "🐼",
  "🐨",
  "🐸",
  "🦁",
  "🐯",
  "🐷",
  "🐵",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦈",
  "🐳",
  "🐬",
  "🦭",
  "🦧",
  "🦥",
  "🦦",
  "🦘",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦚",
  "🦜",
  "🦢",
  "🦩",
  "🐝",
  "🐛",
  "🦋",
];

type StartScreenProps = {
  forecast?: ReactNode;
  onStart?: () => void;
};

export const StartScreen: FC<StartScreenProps> = ({ forecast, onStart }) => {
  const [avatar, setAvatar] = useQueryState("avatar", parseAsString);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [avatars, setAvatars] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Randomly select 4 avatars from the pool - only on client to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    const shuffled = [...ALL_AVATARS].sort(() => Math.random() - 0.5);
    setAvatars(shuffled.slice(0, 4));
  }, []);

  const handleStart = () => {
    if (selectedAvatar) {
      setAvatar(selectedAvatar);
      onStart?.();
    }
  };

  // If avatar is already set, don't show the start screen
  if (avatar) return null;

  // Don't render until client-side avatars are ready
  if (!isClient || avatars.length === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl w-full shadow-2xl">
          <div className="text-center text-slate-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-start p-8 overflow-y-auto">
      {forecast && <div className="w-full max-w-2xl mb-4">{forecast}</div>}
      <div className="bg-white rounded-2xl p-8 mb-8 md:p-12 max-w-2xl w-full shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-slate-900">
          Vælg din avatar
        </h1>
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
          {avatars.map((emoji) => (
            <button
              key={emoji}
              onClick={() => setSelectedAvatar(emoji)}
              className={`
                text-4xl md:text-7xl p-2 md:p-4 rounded-xl transition-all duration-200
                ${
                  emoji === selectedAvatar
                    ? "bg-blue-500 scale-110 shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 hover:scale-105"
                }
              `}
            >
              {emoji}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={handleStart}
            disabled={!selectedAvatar}
            className={`
              px-8 py-4 text-xl font-bold rounded-xl transition-all duration-200
              ${
                selectedAvatar
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:scale-105 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            Start 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
