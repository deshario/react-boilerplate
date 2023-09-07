import { useEffect, useState } from "react";

const darkMedia = "(prefers-color-scheme: dark)";

const useTheme = () => {
  const isDark = () => window.matchMedia(darkMedia).matches;
  const [isDarkTheme, setIsDarkTheme] = useState(isDark);

  const onThemeChanged = (mediaQuery: MediaQueryListEvent) => {
    setIsDarkTheme(mediaQuery.matches);
  };

  useEffect(() => {
    const media = window.matchMedia(darkMedia);
    media.addEventListener("change", onThemeChanged);

    return () => {
      media.removeEventListener("change", onThemeChanged);
    };
  }, []);

  const theme = isDarkTheme ? "dark" : "light";

  return theme;
};

export default useTheme;
