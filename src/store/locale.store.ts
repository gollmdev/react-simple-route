import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type AppLocale } from "@/i18n/resources";

const STORAGE_KEY = "app-locale";

const isSupportedLocale = (value: string): value is AppLocale => {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
};

const getSystemLocale = (): AppLocale => {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  return window.navigator.language.toLowerCase().startsWith("zh")
    ? "zh-CN"
    : "en";
};

const getInitialLocale = (): AppLocale => {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return getSystemLocale();
  }

  try {
    const parsed = JSON.parse(saved) as { state?: { locale?: string } };
    if (parsed.state?.locale && isSupportedLocale(parsed.state.locale)) {
      return parsed.state.locale;
    }
  } catch {
    return getSystemLocale();
  }

  return getSystemLocale();
};

type LocaleStore = {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};

export const useLocaleStore = create<LocaleStore>()(
  persist(
    (set) => ({
      locale: getInitialLocale(),
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: STORAGE_KEY,
    }
  )
);
