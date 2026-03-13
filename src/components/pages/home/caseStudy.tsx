'use client';

import IconFeature from "@/components/iconFeature"
import { ListMusic, MessageSquareQuote, Podcast, Sprout, Trophy, Users } from "lucide-react"
import { useState } from "react";

const STUDIES = {
    KIVOTOS: 'kivotos-study',
    KESSOKU: 'kessoku-study',
    EAGLE: 'eagle-study',
    ASTRAL: 'astral-study'
}
export default function HomeCaseStudy() {
    const [currentStudy, setCurrentStudy] = useState(STUDIES.KIVOTOS);
    
    const handleCaseStudySelect = (targetStudy: string) => {
        if (targetStudy == currentStudy) return;
        const nextStudy = document.getElementById(targetStudy);
        const prevStudy = document.getElementById(currentStudy)

        if (nextStudy && prevStudy) {
            setCurrentStudy(targetStudy)
            prevStudy.classList.remove("fade-in");
            prevStudy.classList.add("fade-out");

            setTimeout(() => {
                nextStudy.classList.remove("fade-out");
                nextStudy.classList.add("fade-in");
            }, 400);
        }
    }
    return (
        <section id="case-study">
            <div className="wrapper">
                <div className="text text--half text--white">
                    <p className="mini-title">Featured Case Studies</p>
                    <h2>Across Worlds, Arcadia always makes an <span className="clr-arc-highlight">Impact</span></h2>
                    <p>Arcadia’s rich app ecosystem allows it to contribute to different industries in different ways, big or small. See below or click to find out the details on how Arcadia left a mark on these clients.</p>
                </div>
                <div id="case-study-content">
                    <div id="container">
                        <SchaleStudy />
                        <KesokuStudy />
                        <EagleStudy />
                        <AstralStudy />
                    </div>
                    <div id="case-study-controls">
                        <div className={`case-study-button ${currentStudy == STUDIES.KIVOTOS && 'selected'}`} onClick={() => handleCaseStudySelect(STUDIES.KIVOTOS)}>
                            <img src="/sponsors/schale.png" alt="" />
                        </div>
                        <div className={`case-study-button ${currentStudy == STUDIES.KESSOKU && 'selected'}`} onClick={() => handleCaseStudySelect(STUDIES.KESSOKU)}>
                            <img src="/sponsors/kessoku.png" alt="" />
                        </div>
                        <div className={`case-study-button ${currentStudy == STUDIES.EAGLE && 'selected'}`} onClick={() => handleCaseStudySelect(STUDIES.EAGLE)}>
                            <img src="/sponsors/eagle-jump.png" alt="" />
                        </div>
                        <div className={`case-study-button ${currentStudy == STUDIES.ASTRAL && 'selected'}`} onClick={() => handleCaseStudySelect(STUDIES.ASTRAL)}>
                            <img src="/sponsors/astral-express.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SchaleStudy() {

    return (
        <div id="kivotos-study" className='case-study-feature fade-in'>
            <h3 className="case-study-title">Making a Halo Games to Never Forget</h3>
            <div className="case-study-content">
                <img className="border-radius-md shadow" src="/pages/home/case-study/kivotos.png" alt="" />
                <div>
                    <div className="stats">
                        <IconFeature 
                            icon={MessageSquareQuote}
                            title='57%'
                            description="Increase in social media participation during the games"
                        />
                        <IconFeature 
                            icon={Users}
                            title='25K'
                            description="New visitors from outside kivotos visiting for the halo games"
                        />
                    </div>
                    <div className="quote">
                        <p>“The 2024 Kivoto’s Halo Games was the most successful in all of Kivotos’ History. Through our collaboration with Arcadia and their social media app: Tsunagu, our students were given a platform to share happiness and friendship with the whole city and incoming vistors.”</p>
                        <p>- The Kivotos General Student Council President</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function KesokuStudy() {

    return (
        <div id="kessoku-study" className='case-study-feature fade-out'>
            <h3 className="case-study-title">Putting the Stars of Shimokitazawa on Stage</h3>
            <div className="case-study-content">
                <img className="border-radius-md shadow" src="/pages/home/case-study/kessoku.jpg" alt="" />
                <div>
                    <div className="stats">
                        <IconFeature 
                            icon={Sprout}
                            title='68%'
                            description="Increase in social media participation after launching on Kiku"
                        />
                        <IconFeature 
                            icon={ListMusic}
                            title='3.2X'
                            description="Growth in fan playlist sharing."
                        />
                    </div>
                    <div className="quote">
                        <p>“I-I didn’t think anyone would actually listen… but seeing people add our songs to their playlists makes me want to practice even harder.”</p>
                        <p>- Hitori Gotoh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EagleStudy() {

    return (
        <div id="eagle-study" className='case-study-feature fade-out'>
            <h3 className="case-study-title">Making the Leap in the Game Industry</h3>
            <div className="case-study-content">
                <img className="border-radius-md shadow" src="/pages/home/case-study/eagle.jpg" alt="" />
                <div>
                    <div className="stats">
                        <IconFeature 
                            icon={Podcast}
                            title='74%'
                            description="Increase in community engagement through dev blogs, posts and disucssions on Asobu"
                        />
                        <IconFeature 
                            icon={Users}
                            title='2.6x'
                            description="Players used Arcadia’s game library tools to organize and share Eagle Jump titles, leading to a surge in recommendations and discovery among indie game fans."
                        />
                    </div>
                    <div className="quote">
                        <p>“Seeing players enjoy the worlds we worked so hard to build… it really reminds me why I wanted to make games in the first place.”</p>
                        <p>- Aoba Suzukaze</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AstralStudy() {

    return (
        <div id="astral-study" className='case-study-feature fade-out'>
            <h3 className="case-study-title">Seeking 1st at Paperfold College</h3>
            <div className="case-study-content">
                <img className="border-radius-md shadow" src="/pages/home/case-study/rappa.webp" alt="" />
                <div>
                    <div className="stats">
                        <IconFeature 
                            icon={Users}
                            title='1.2 Million'
                            description="Peak live concurrent viewers during the Ninjastar live"
                        />
                        <IconFeature 
                            icon={Trophy}
                            title='1st Place'
                            description="Placement in the Paperfold concert clash"
                        />
                    </div>
                    <div className="quote">
                        <p>"Arcadia gave me the stage of a lifetime! One moment I was rehearsing in the cargo bay, the next I was performing for an entire galaxy! Guess you could say... this ninja finally hit her target audience!"</p>
                        <p>- Rappa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}