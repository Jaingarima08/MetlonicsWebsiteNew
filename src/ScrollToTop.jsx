import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add specific routes where you want to scroll to the top
    const scrollRoutes = [ "/", "/infrastructure", "/about", "/product", "/contact", "/certifications", 
      "/privacy-policy", "/terms-and-conditions" ];
    
    if (scrollRoutes.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;

