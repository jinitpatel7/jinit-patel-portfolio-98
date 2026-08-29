import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteEffects = () => {
  const { pathname } = useLocation();
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setAnnouncement(`Navigated to ${pathname === "/" ? "home" : pathname.replace(/[-/]/g, " ").trim()}`);
  }, [pathname]);

  return <div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div>;
};

export default RouteEffects;
