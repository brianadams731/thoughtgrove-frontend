import {MutableRefObject, RefObject, useEffect, useRef, useState} from "react";
   
/*
* @params: keepInView: boolean - when inViewPort is set to true, it will not be reset back to false when the element falls out of the view port
* @params: percentTillReveal: decimal 0-1 - % in decimal of element that needs to be in viewport until inViewPort is set to true

* @returns: elementRef: ref - ref to place on the element you want to observe
* @returns: inViewPort: boolean - bool value that notifies when element is in the viewport
*/

const useElementInViewport = <T extends HTMLElement> (keepInView:boolean = false, percentTillReveal:number = 1):[elementRef:RefObject<T>, inViewPort:boolean] =>{
    const elementRef = useRef<T>(null);
    const [inViewPort,setInViewPort] = useState<boolean>(false);
    const options = useRef({
        root:null,      // object to check against
        rootMargin: "0px",
        threshold: percentTillReveal, // 1 whole item must be in viewport, .01 1% of item must be in viewport
    })

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const [entry] = entries;
            if(keepInView){         // Keeps inViewPort true
                if(entry.isIntersecting){
                    setInViewPort(true);
                }
            }else{
                setInViewPort(entry.isIntersecting);
            }
        }, options.current) // options passed in AFTER the callback

        if(elementRef.current){
            observer.observe(elementRef.current);
        }

        return () => {
            if(elementRef.current){
                //eslint-disable-next-line
                observer.unobserve(elementRef.current);
            }
        }
        //eslint-disable-next-line
    },[elementRef])

    return [elementRef, inViewPort];
}

export default useElementInViewport;