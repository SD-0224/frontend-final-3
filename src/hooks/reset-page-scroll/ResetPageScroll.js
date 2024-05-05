import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const useResetPageScroll = function () {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};
