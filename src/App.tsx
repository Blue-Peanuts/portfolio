import './App.css'

import React from 'react'


import InfoCard from './InfoCard/InfoCard.tsx'
import Background from './Background/Background.tsx'
import GamesSection from './GamesSection/GamesSection.tsx'
import AppsSection from './AppsSection/AppsSection.tsx'
import MusicSection from './MusicSection/MusicSection.tsx'
import IllustrationSection from './IllustrationSection/IllustrationSection.tsx'
import NavBar from './NavBar.tsx'

interface NavRefs {
    games?: React.RefObject<HTMLDivElement>,
    apps?: React.RefObject<HTMLDivElement>,
    music?: React.RefObject<HTMLDivElement>,
    illustration?: React.RefObject<HTMLDivElement>,
}


export const NavRefsContext = React.createContext<NavRefs>({});

function App() {

    const navRefs = React.useRef<HTMLDivElement>(null);
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

        if (navRefs.current) {
            observer.observe(navRefs.current);
        }
    }, [navRefs]);


    const gamesSectionRef = React.useRef<HTMLDivElement>(null);
    const appsSectionRef = React.useRef<HTMLDivElement>(null);
    const musicSectionRef = React.useRef<HTMLDivElement>(null);
    const illustrationSectionRef = React.useRef<HTMLDivElement>(null);

    return (
        <NavRefsContext.Provider value={{games: gamesSectionRef, apps: appsSectionRef, music: musicSectionRef, illustration: illustrationSectionRef}}>
            
                <NavBar infoCardVisible={infoIsInView}/>

            <Background />
            <div className=' pt-0 xl:pt-16 2xl:pt-24'></div>
            <div className=' text-white scale-75 sm:scale-100' ref={navRefs}>
                <InfoCard/>
            </div>
            <div className=' h-[70vh]'></div>
            <div ref={gamesSectionRef}>
                <GamesSection />
            </div>
            <div className=' h-[70vh]'></div>
            <div ref={appsSectionRef}>
                <AppsSection />
            </div>
            <div className=' h-[70vh]'></div>
            <div ref={musicSectionRef}>
                <MusicSection />
            </div>
            <div className=' h-[70vh]'></div>
            <div ref={illustrationSectionRef}>
                <IllustrationSection />
            </div>
        </NavRefsContext.Provider>
    )
}

export default App
