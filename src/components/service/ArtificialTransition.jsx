import React, { useLayoutEffect, useRef, useState } from 'react';
import { useTransition } from '../../hooks/useTransition';
import { deepCompare, isNumber } from 'advanced-cropper';
import classnames from 'classnames';

const ArtificialTransition = ({ className, transitions, children, ...values }) => {
  const root = useRef(null);

  const transitionValues = useRef({ ...values });

  const [rememberedValues, setRememberedValues] = useState(values);

  const [runTransitions, transitionsActive] = useTransition(transitions);

  useLayoutEffect(() => {
    if (!deepCompare(rememberedValues, values)) {
      setRememberedValues(values);

      const startValues = transitionsActive
        ? { ...transitionValues.current }
        : rememberedValues;

      runTransitions((progress) => {
        const properties = ['left', 'top', 'height', 'width'];

        properties.forEach((property) => {
          const desiredValue = values[property];
          const startValue = startValues[property];

          transitionValues.current[property] =
            isNumber(startValue) && isNumber(desiredValue)
              ? startValue + (desiredValue - startValue) * progress
              : desiredValue;
        });

        if (root.current) {
          root.current.style.width = `${transitionValues.current.width}px`;
          root.current.style.height = `${transitionValues.current.height}px`;
          root.current.style.transform = `translate3d(${transitionValues.current.left}px, ${transitionValues.current.top}px, 0px)`;
        }
      });
    }
  }, [rememberedValues, transitionsActive, values.width, values.height, values.top, values.left]);

  const currentValues = transitionsActive ? transitionValues.current : values;

  const rootStyle = {
    left: 0,
    top: 0,
    width: `${currentValues.width}px`,
    height: `${currentValues.height}px`,
    transform: `translate3d(${currentValues.left}px, ${currentValues.top}px, 0px)`,
  };

  return (
    <div ref={root} className={classnames('advanced-cropper-artificial-transition', className)} style={rootStyle}>
      {children}
    </div>
  );
};

export default ArtificialTransition;