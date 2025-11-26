export type WeeklyScores = {
  weekStart: string; // ISO date string for the Monday of the week
  scores: Record<string, number>; // day of week (0-6) -> time in seconds
};

export function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
  return new Date(d.setDate(diff));
}

export function getWeekStartString(date: Date): string {
  const weekStart = getWeekStart(date);
  weekStart.setHours(0, 0, 0, 0);
  return weekStart.toISOString().split("T")[0];
}

export function getDayOfWeek(date: Date): string {
  return date.getDay().toString();
}

export function loadWeeklyScores(): WeeklyScores | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem("weeklyScores");
  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveWeeklyScores(scores: WeeklyScores): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("weeklyScores", JSON.stringify(scores));
}

export function getCurrentWeekScores(): WeeklyScores {
  const today = new Date();
  const weekStart = getWeekStartString(today);
  const stored = loadWeeklyScores();

  // If no scores or different week, start fresh
  if (!stored || stored.weekStart !== weekStart) {
    return {
      weekStart,
      scores: {},
    };
  }

  return stored;
}

export function saveScore(timeInSeconds: number): boolean {
  const today = new Date();
  const weekStart = getWeekStartString(today);
  const dayOfWeek = getDayOfWeek(today);

  let weeklyScores = getCurrentWeekScores();

  // Ensure we're in the right week
  if (weeklyScores.weekStart !== weekStart) {
    weeklyScores = {
      weekStart,
      scores: {},
    };
  }

  const isNewRecord =
    !weeklyScores.scores[dayOfWeek] ||
    timeInSeconds < weeklyScores.scores[dayOfWeek];

  if (isNewRecord) {
    weeklyScores.scores[dayOfWeek] = timeInSeconds;
    saveWeeklyScores(weeklyScores);
  }

  return isNewRecord;
}

export function getTodaysBestScore(): number | null {
  const weeklyScores = getCurrentWeekScores();
  const dayOfWeek = getDayOfWeek(new Date());
  return weeklyScores.scores[dayOfWeek] ?? null;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
