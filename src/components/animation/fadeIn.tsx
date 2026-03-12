'use client';

import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

export default function FadeIn(
    {
        children, id="", className = '', direction = 'up', delay = .2, threshold = 0.7
    } : {
        children: React.ReactNode,
        id?: string,
        className?: string,
        direction?: string,
        delay?: number,
        threshold?: number
    }
) {
    const { ref, inView } = useInView({ threshold })
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (inView) {
        const timeout = setTimeout(() => {
            setShow(true);
        }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [inView, delay]);

    const directionTransforms: Record<string, string> = {
        up: "translateY(20px)",
        down: "translateY(-20px)",
        left: "translateX(20px)",
        right: "translateX(-20px)",
    };

    const transitionStyle = {
        opacity: show ? 1 : 0,
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
        transform: show ? "translate(0, 0)" : directionTransforms[direction]
    }
    return (
        <div
            style={transitionStyle}
            className={`${className}`}
            id={`${id}`}
            ref={ref}
        >
        {children}
        </div>
    )
}