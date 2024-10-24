"use client";

import React, { useEffect, useRef } from "react";
import JSConfetti from "js-confetti";
import { parseAsString, useQueryState } from "nuqs";

export default function ConfettiComponent() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const confettiRef = useRef<any | undefined>(undefined);
  const [avatar] = useQueryState("avatar", parseAsString.withDefault("🎉"));

  useEffect(() => {
    const jsConfetti = new JSConfetti(confettiRef.current);
    jsConfetti.addConfetti({
      emojis: [avatar],
      emojiSize: 100,
      confettiRadius: 6,
      confettiNumber: 50,
    });

    return () => {
      jsConfetti.clearCanvas();
    };
  }, [avatar]);

  return <canvas className="absolute" ref={confettiRef} />;
}
