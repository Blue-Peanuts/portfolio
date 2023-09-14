import './App.css'

import React from 'react'


import InfoCard from './InfoCard/InfoCard.tsx'
import Background from './Background/Background.tsx'
import GamesSection from './GamesSection/GamesSection.tsx'
import AppsSection from './AppsSection/AppsSection.tsx'
import MusicSection from './MusicSection/MusicSection.tsx'
import IllustrationSection from './IllustrationSection/IllustrationSection.tsx'

interface NavRefs {
    games?: React.RefObject<HTMLDivElement>,
    apps?: React.RefObject<HTMLDivElement>,
    music?: React.RefObject<HTMLDivElement>,
    illustration?: React.RefObject<HTMLDivElement>,
}


export const SectionRefsContext = React.createContext<NavRefs>({});

function App() {

    const infoRef = React.useRef<HTMLDivElement>(null);
    const [infoIsInView, setInfoIsInView] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInfoIsInView(entry.isIntersecting);
            },
            {
                threshold: 0,
            }
        );

        if (infoRef.current) {
            observer.observe(infoRef.current);
        }
    }, [infoRef]);


    const gamesSectionRef = React.useRef<HTMLDivElement>(null);
    const appsSectionRef = React.useRef<HTMLDivElement>(null);
    const musicSectionRef = React.useRef<HTMLDivElement>(null);
    const illustrationSectionRef = React.useRef<HTMLDivElement>(null);

    return (
        <SectionRefsContext.Provider value={{games: gamesSectionRef, apps: appsSectionRef, music: musicSectionRef, illustration: illustrationSectionRef}}>
            


            <Background />
            <div className=' pt-0 xl:pt-16 2xl:pt-24'></div>
            <div className=' text-white scale-75 sm:scale-100' ref={infoRef}>
                <InfoCard/>
            </div>
            <div className=' h-[110vh]'></div>
            <div ref={gamesSectionRef}>
                <GamesSection />
            </div>
            <div className=' h-[110vh]'></div>
            <div ref={appsSectionRef}>
                <AppsSection />
            </div>
            <div className=' h-[110vh]'></div>
            <div ref={musicSectionRef}>
                <MusicSection />
            </div>
            <div className=' h-[110vh]'></div>
            <div ref={illustrationSectionRef}>
                <IllustrationSection />
            </div>
        </SectionRefsContext.Provider>
    )
}

export default App
