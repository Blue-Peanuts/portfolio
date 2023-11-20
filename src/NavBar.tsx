
import { NavRefsContext } from "./App";

import React from "react";


function NavBar(props: { infoCardVisible: boolean }) {
    const navRefs = React.useContext(NavRefsContext);

    return <div className='fixed w-full flex flex-row justify-end p-4 pb-0 pr-8 gap-4 z-50 bg-slate-950 text-xs sm:text-sm text-slate-500'>
        <span className={`${props.infoCardVisible? ' -translate-y-16':'opacity-100'} flex flex-row justify-end gap-4 transition-all`}>
            <NavButton navRef={navRefs.games} name='Games' />
            <NavButton navRef={navRefs.apps} name='Apps' />
            <NavButton navRef={navRefs.music} name='Music' />
            <NavButton navRef={navRefs.illustration} name='Illustrations' />
        </span>
        <span className={`${props.infoCardVisible ? 'text-sm xl:text-2xl' : ''} transition-all`}>
        <NavButton navRef={navRefs.contacts} name='Contacts and Links' />
        </span>
    </div>
}

function NavButton(props: { navRef?: React.RefObject<HTMLDivElement>, name: string }) {
    return <button className={`rounded-full p-1 underline`} onClick={() => {
        props.navRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }}>
        {props.name}
    </button>

}


export default NavBar;