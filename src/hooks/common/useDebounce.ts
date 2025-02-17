import { useRef, useEffect } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: never[]) => void;

function useDebounce<Func extends SomeFunction>(func: Func, delay = 1000) {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  return ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  }) as Func;
}

export default useDebounce;
