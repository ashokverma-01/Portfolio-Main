import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // ✅ Current route ka path milta hai

  useEffect(() => {
    window.scrollTo(0, 0); // ✅ Har route change pe page top pe scroll hoga
  }, [pathname]); // ✅ Jab bhi pathname change ho, effect trigger hoga

  return null;
}

export default ScrollToTop;
