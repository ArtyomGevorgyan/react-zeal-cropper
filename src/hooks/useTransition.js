import { useRef, useState } from 'react';
import { Animation } from 'advanced-cropper';

export function useTransition(transitions = null) {
  const animation = useRef(new Animation());
  const [active, setActive] = useState(false);

  return [
    (callback) => {
      if (transitions && transitions.active) {
        animation.current.start({
          ...transitions,
          onStart() {
            setActive(true);
          },
          onProgress(progress) {
            callback(progress);
          },
          onStop() {
            setActive(false);
          },
        });
      } else if (!animation.current.active) {
        callback(1);
      }
    },
    active,
  ];
}