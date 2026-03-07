import { useEffect, useState } from "react";

const desktopMediaQuery = "(min-width: 1024px)";
const getDesktopMatch = () =>
  typeof window !== "undefined" && window.matchMedia(desktopMediaQuery).matches;

const useDesktopBreakpoint = () => {
  const [isDesktop, setIsDesktop] = useState(getDesktopMatch);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQueryList = window.matchMedia(desktopMediaQuery);
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  return isDesktop;
};

export default useDesktopBreakpoint;
