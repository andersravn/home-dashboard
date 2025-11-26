"use client";

import { FC, useEffect, useState } from "react";
import {
  formatTime,
  getTodaysBestScore,
  saveScore,
} from "../lib/timer-storage";

type TimerProps = {
  isRunning: boolean;
  isCompleted: boolean;
};

export const Timer: FC<TimerProps> = ({ isRunning, isCompleted }) => {
  const [seconds, setSeconds] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  useEffect(() => {
    // Load best score on mount
    setBestScore(getTodaysBestScore());
  }, []);

  useEffect(() => {
    if (!isRunning || isCompleted) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isCompleted]);

  useEffect(() => {
    if (isCompleted && seconds > 0) {
      const newRecord = saveScore(seconds);
      setIsNewRecord(newRecord);
      if (newRecord) {
        setBestScore(seconds);
      }
    }
  }, [isCompleted, seconds]);

  return (
    <div className="mb-6 text-center">
      <div className="text-6xl md:text-8xl font-bold text-slate-900 mb-2">
        {formatTime(seconds)}
      </div>
      {isNewRecord && isCompleted && (
        <div className="text-2xl md:text-4xl font-bold text-green-600 animate-bounce">
          Ny rekord! 🎉
        </div>
      )}
      {bestScore !== null && !isNewRecord && (
        <div className="text-lg md:text-xl text-slate-100">
          Bedste tid denne uge: {formatTime(bestScore)}
        </div>
      )}
    </div>
  );
};
