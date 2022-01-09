import {useEffect, useState} from "react";

// @returns: windowSize: object{width:int,height:int} - Object that contains the window width and height, changes on resize

interface IWindowSize{
    width:number,
    height:number
}

const useWindowSize = ():IWindowSize|undefined =>{
    const [windowSize,setWindowSize] = useState<IWindowSize>();

    const getWindowSize = () =>{
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }


    const windowResize = () =>{
        const wSize = getWindowSize();
        setWindowSize(wSize)
    }

    useEffect(()=>{
        windowResize();
        window.addEventListener('resize', windowResize)

        return () =>{
            window.removeEventListener('resize', windowResize)
        }
        //eslint-disable-next-line
    },[])

    return windowSize;
}

export default useWindowSize;