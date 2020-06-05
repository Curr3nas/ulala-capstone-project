import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** This module is used to provide the effect of "loading a new page" by scrolling to the top
 * when a <Link> was clicked after having scrolled down a longer page.
*/ 


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}