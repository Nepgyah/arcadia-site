'use client';

import { useEffect, useState } from "react";

export default function HeroSlider() {
    const words = ["Anime", "Manga", "Games", "Music", "Cons"];
    let index = 0;

    useEffect(() => {
        let index = 0;
        const span = document.getElementById("word");
        if (span) {
            setInterval(() => {
                span.classList.remove("fade-in");
                span.classList.add("fade-out");
    
                setTimeout(() => {
    
                index = (index + 1) % words.length;
                span.textContent = words[index];
                span.classList.remove("fade-out");
                span.classList.add("fade-in");
                }, 400);
            }, 5000);

        }
    }, [])

    return (
        <span id="slider-container" className="bg-arc-accent border-radius-md shadow">
            <span id="word" className="clr-txt-light">{words[index]}</span>
        </span>
    )
}