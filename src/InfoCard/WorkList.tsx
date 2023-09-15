import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import TextAnimation from "../TextAnimation";

import { default as GamesIcon } from "../assets/games.svg";
import { default as AppsIcon } from "../assets/appsandtools.svg";
import { default as MusicIcon } from "../assets/music.svg";
import { default as IllustrationsIcon } from "../assets/illustrations.svg";

import { NavRefsContext } from "../App";

import { useState, useContext } from "react";

import WorkButton from "./WorkButton";

function WorkList() {
    const [hoverCount, setHoverCount] = useState(0);

    const navRefs = useContext(NavRefsContext)

    function hoverIncrementCallback() {
        setHoverCount(prevHoverCount => prevHoverCount + 1);
    }

    function hoverDecrementCallback() {
        setHoverCount(prevHoverCount => prevHoverCount - 1);
    }

    return <div className=''>
        <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-4'>
            <div className=' text-xs sm:text-lg mb-2'>
                <p className=' text-slate-500 '>
                    <TextAnimation texts={[
                        '_', 'I_,', 'I ma_', 'I make_', 'I make._', 'I make.._', 'I make..._',
                        'I make..._', 'I make...', 'I make...', 'I make..._', 'I make..._',]} secondsPerFrame={0.2} />
                </p>
            </div>
        </ScrollAnimation>
        <div className=' pt-4 flex flex-col gap-3 h-[12rem] sm:h-[15rem]'>
            <WorkButton text='Video Games' color='border-red-500 text-red-100 hover:bg-red-500'
                oneIsHovered={hoverCount > 0}
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                svg={GamesIcon}
                animationBuffer={3}
                navRef= {navRefs.games}
            />
            <WorkButton text='Apps and Tools' color='border-emerald-500 text-emerald-100 hover:bg-emerald-500'
                oneIsHovered={hoverCount > 0}
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                svg={AppsIcon}
                animationBuffer={4}
                navRef= {navRefs.apps}
            />
            <WorkButton text='Music' color='border-indigo-500 text-indigo-100 hover:bg-indigo-500'
                oneIsHovered={hoverCount > 0}
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                svg={MusicIcon}
                animationBuffer={5}
                navRef= {navRefs.music}
            />
            <WorkButton text='Illustrations' color='border-fuchsia-500 text-fuchsia-100 hover:bg-fuchsia-500'
                oneIsHovered={hoverCount > 0}
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback} 
                svg={IllustrationsIcon} 
                animationBuffer={6} 
                navRef= {navRefs.illustration}
            />
        </div>
    </div>
}


export default WorkList;