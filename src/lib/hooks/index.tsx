import { useLayoutEffect, useMemo, useState } from 'react';
import { getDiamond, getWindowDimensions } from '../actions';

export function useDiamond() {
  const [diamond, setDiamond] = useState(getDiamond());

  useMemo(() => {
    setDiamond(getDiamond());
  }, []);

  return diamond;
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
