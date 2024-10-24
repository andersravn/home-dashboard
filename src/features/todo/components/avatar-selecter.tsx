"use client";

import { parseAsBoolean, parseAsString, useQueryState } from "nuqs";
import { FC } from "react";

export const AvatarSelecter: FC = () => {
  const [selectedAvatar, setAvatar] = useQueryState("avatar", parseAsString);
  const [showAvatarSelecter, toggleAvatarSelecter] = useQueryState(
    "showAvatarSelecter",
    parseAsBoolean
  );
  const avatars = ["🦄", "🐶", "🐱", "🐭", "💩", "🐉", "⛄️", "🤖"];
  if (!showAvatarSelecter) return null;
  return (
    <>
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div className="fixed inset-0 h-fit p-10 m-10 bg-white rounded text-slate-900">
        <h1 className="text-4xl text-center mb-8">Vælg</h1>
        <div className="grid grid-cols-4 gap-8">
          {avatars.map((avatar) => (
            <div
              key={avatar}
              onClick={() => setAvatar(avatar)}
              className={`${
                avatar === selectedAvatar
                  ? "rounded border-4 p-2 border-blue-500 w-fit"
                  : "p-2"
              }`}
            >
              <span className="text-6xl">{avatar}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => toggleAvatarSelecter(false)}
            className="px-4 py-2 min-w-40 bg-green-700 text-white w-fit rounded mt-8"
          >
            Gem
          </button>
        </div>
      </div>
    </>
  );
};
