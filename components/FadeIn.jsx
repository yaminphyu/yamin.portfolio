import useAnimation from "@/hooks/useAnimation";
import { useRef } from "react";

export const FadeIn = ({ children, delay, styleName }) => {
    const ref = useRef(null);
    const { isVisible } = useAnimation({ targetRef: ref });

    return (
        <div
            ref={ref}
            className={`
                ${styleName}
                transition-all duration-[1000ms] ease-in-out
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
            `}
            style={{ transitionDelay: isVisible ? `${5 + delay}ms` : "0ms" }}
        >
            {children}
        </div>
    );
};