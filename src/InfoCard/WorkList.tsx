import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import TextAnimation from "../TextAnimation";

import { default as GamesIcon } from "../assets/games.svg";

import { useState } from "react";

import WorkButton from "./WorkButton";

function WorkList() {
    const [hoverCount, setHoverCount] = useState(0);

    function hoverIncrementCallback() {
        setHoverCount(prevHoverCount => prevHoverCount + 1);
    }

    function hoverDecrementCallback() {
        setHoverCount(prevHoverCount => prevHoverCount - 1);
    }

    return <div>
        <ScrollAnimation initialClass='opacity-none' animationClass='blur-reveal-4'>
            <div className=' text-xs sm:text-lg mb-2'>
                <TextAnimation texts={[
                    '_', 'I_,', 'I ma_', 'I make_', 'I make._', 'I make.._', 'I make..._',
                    'I make..._', 'I make...', 'I make...', 'I make..._', 'I make..._',]} secondsPerFrame={0.2} />
            </div>
        </ScrollAnimation>
        <div className=' pt-4 flex flex-col gap-3'>
            <WorkButton text='Video Games' color='border-red-500 text-red-100 hover:bg-red-500'
                oneIsHovered={hoverCount > 0}
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                svg={GamesIcon}
                animationBuffer={3}
            />
            <WorkButton text='Apps and Tools' color='border-emerald-500 text-emerald-100 hover:bg-emerald-500'
                oneIsHovered={hoverCount > 0}
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                svg={GamesIcon}
                animationBuffer={4}
            />
            <WorkButton text='Music' color='border-indigo-500 text-indigo-100 hover:bg-indigo-500'
                oneIsHovered={hoverCount > 0}
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                svg={GamesIcon}
                animationBuffer={5}
            />
            <WorkButton text='Illustrations' color='border-fuchsia-500 text-fuchsia-100 hover:bg-fuchsia-500'
                oneIsHovered={hoverCount > 0}
                hoverIncrementCallback={hoverIncrementCallback}
                hoverDecrementCallback={hoverDecrementCallback}
                svg={GamesIcon}
                animationBuffer={6}
            />
        </div>
    </div>
}


export default WorkList;