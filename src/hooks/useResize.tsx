import { screens } from "@/params/breakpoints";
import { useEffect, useState } from "react";

export const useResize = () => {
    const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWidthScreen(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return {
      widthScreen,
      isScreenVsm: widthScreen <= screens.SCREEN_VSM,
      isScreenSm: widthScreen <= screens.SCREEN_SM,
      isScreenMd: widthScreen <= screens.SCREEN_MD,
      
    };
  };