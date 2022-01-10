import { motion } from "framer-motion";

interface Props{
    width:string;
    fill:string;
    hoverFill:string;
}

const WrongIcon = ({width, fill, hoverFill}:Props):JSX.Element =>{
    return(
        <svg width={width} viewBox="0 0 52 53" style={{fill}} xmlns="http://www.w3.org/2000/svg">
            <motion.path animate={{fill}} whileHover={{fill:hoverFill}} transition={{duration:.2}} d="M35.5547 26.5L50.2134 11.8413C52.0122 10.0425 52.0122 7.12598 50.2134 5.32568L46.9556 2.06787C45.1567 0.269043 42.2402 0.269043 40.4399 2.06787L25.7812 16.7266L11.1226 2.06787C9.32373 0.269043 6.40723 0.269043 4.60693 2.06787L1.34912 5.32568C-0.449707 7.12451 -0.449707 10.041 1.34912 11.8413L16.0078 26.5L1.34912 41.1587C-0.449707 42.9575 -0.449707 45.874 1.34912 47.6743L4.60693 50.9321C6.40576 52.731 9.32373 52.731 11.1226 50.9321L25.7812 36.2734L40.4399 50.9321C42.2388 52.731 45.1567 52.731 46.9556 50.9321L50.2134 47.6743C52.0122 45.8755 52.0122 42.959 50.2134 41.1587L35.5547 26.5Z" />
        </svg>
    )
}

export { WrongIcon };