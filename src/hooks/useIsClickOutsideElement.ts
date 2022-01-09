import { useState, useRef, useEffect, RefObject } from "react";

/*
* @returns: isOutside: boolean - boolean value representing whither click event was outside element
* @returns: element: ref - ref that is used to place on dom element you want to check if click is inside of
* @returns: clickEvent: event - the click event that is being observed to check if click is outSide of element
*/

const useIsClickOutsideElement = <T extends HTMLElement> (): [isOutSide:boolean|undefined, clickEvent:MouseEvent|undefined, element:RefObject<T|undefined>] =>{
    const [isOutside, setIsOutSide] = useState<boolean|undefined>(false);
    const [clickEvent, setClickEvent] = useState<MouseEvent>();
    const element = useRef<T>();
    
    const clicked = (e:MouseEvent) =>{
        setClickEvent(e);
        setIsOutSide(element?.current && !element?.current?.contains(e.target as Element));
    }


    useEffect(()=>{
        document.addEventListener("mousedown",clicked);
        return ()=>{
            document.removeEventListener("mousedown",clicked)
        };
    },[element])

    return [isOutside, clickEvent, element];
}

export default useIsClickOutsideElement;