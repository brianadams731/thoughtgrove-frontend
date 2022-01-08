import { useRef } from "react";

interface Props{
    height: number;
    width: number;
}
const AddDeckBorder = ({height, width}:Props):JSX.Element =>{
    const borderWidth = useRef(5);
    return (
        <svg width={`${width}px`} height={`${height}px`} /*viewBox="0 0 300 200"*/ fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.5" y="2.5" width={width-borderWidth.current} height={height-borderWidth.current} rx="17.5" /*stroke="#C0C0C0"*/ strokeWidth={borderWidth.current} strokeDasharray="10 10"/>
        </svg>
    )
}

export { AddDeckBorder };