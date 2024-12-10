import { useEffect, useState } from "react";



const useIsAnimation = (
  ref
: React.RefObject<HTMLElement>): boolean => {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  useEffect(() => {
    const slider = ref.current;

    const handleStart = (event: TransitionEvent) => {
      if (event.target === slider) {
        setIsAnimation(true);
      }
    };

    const handleEnd = (event: TransitionEvent) => {
      if (event.target === slider) {
        setIsAnimation(false);
      }
    };

    slider?.addEventListener("transitionstart", handleStart);
    slider?.addEventListener("transitionend", handleEnd);

    return () => {
      slider?.removeEventListener("transitionstart", handleStart);
      slider?.removeEventListener("transitionend", handleEnd);
    };
  }, []);

  return isAnimation;
};

export default useIsAnimation;
