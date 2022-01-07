import { RefObject, useLayoutEffect, useRef, useState } from "react";

interface IDimensions{
    height:number;
    width:number;
}

const useDimension = <T extends HTMLElement>():[IDimensions|undefined, RefObject<T|undefined>] =>{
    const refToElement = useRef<T>();
    const [dimensions, setDimensions] = useState<IDimensions>();

    useLayoutEffect(()=>{
        if(!refToElement.current){
            return;
        }
        const observer = new ResizeObserver( _ =>{    
            setDimensions({
                width: refToElement!.current!.offsetWidth,
                height: refToElement!.current!.offsetHeight
            })
        })
        observer.observe(refToElement.current);
        return ()=>{
            observer.disconnect();
        }
    },[])

    return [dimensions, refToElement];
}

export {useDimension};