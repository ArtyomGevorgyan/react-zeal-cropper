import { useRef, useState } from "react";
import { useUpdateEffect } from "./useUpdateEffect";

export function useStateWithCallback(initialState) {
    const [state, setState] = useState(initialState);
    const [callback, setCallback] = useState(null);
    const previousState = useRef(initialState);

    useUpdateEffect(() => {
        if (callback) {
            callback(state, previousState.current);
        }
    }, [callback]);

    return [
        state,
        (value, callback) => {
            previousState.current = state;
            setState(value);
            setCallback(() => callback);
        }
    ];
}