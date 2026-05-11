import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "app-theme";

const getSystemTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (!savedTheme) {
    return getSystemTheme();
  }

  try {
    const parsed = JSON.parse(savedTheme) as { state?: { mode?: ThemeMode } };
    if (parsed.state?.mode === "dark" || parsed.state?.mode === "light") {
      return parsed.state.mode;
    }
  } catch {
    return getSystemTheme();
  }

  return getSystemTheme();
};

type ThemeStore = {
  mode: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: getInitialTheme(),
      setTheme: (mode) => set({ mode }),
      toggleTheme: () =>
        set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
    }),
    {
      name: STORAGE_KEY,
    }
  )
);