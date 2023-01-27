import { useRef, useEffect } from 'react';

export default (effects: any, dep: any): void => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      effects();
    } else {
      didMountRef.current = true;
    }
  }, dep);
};
