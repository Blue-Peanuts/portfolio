import './Background.scss'
import { useState, useEffect } from 'react';

function Background() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowsWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // heavy refactor needed

    const sections = 10;
    const gridWidth = windowsWidth / 3;

    return <>
        { windowsWidth > 768 &&
        <div className=' absolute -z-10 overflow-hidden h-full w-full'>
            <div style={
                {
                    top: roundToNearest(mousePos.y + scrollPosition - gridWidth / 2, gridWidth / sections),
                    left: roundToNearest(mousePos.x - gridWidth / 2, gridWidth / sections),
                    position: 'relative',
                    height: `${gridWidth}px`,
                    gridTemplateRows: `repeat(${sections}, minmax(0, 1fr))`,
                    gridTemplateColumns: `repeat(${sections}, minmax(0, 1fr))`,
                }
            } className='aspect-square grid grid-cols-8 grid-rows-2'>
                {Array.from(Array(sections ** 2).keys()).map((i) => {

                    const x = i % sections;
                    const y = Math.floor(i / sections);
                    const gridPosX = roundToNearest(mousePos.x - gridWidth / 2, gridWidth / sections);
                    const gridPosY = roundToNearest(mousePos.y + scrollPosition - gridWidth / 2, gridWidth / sections);
                    const posX = gridPosX + (x + 0.5) * gridWidth / sections;
                    const posY = gridPosY + (y + 0.5) * gridWidth / sections;
                    const distX = Math.abs(posX - mousePos.x);
                    const distY = Math.abs(posY - mousePos.y - scrollPosition);
                    const dist = Math.sqrt(distX * distX + distY * distY);
                    return <div className=' flex justify-center items-center'> <div key={i} style={{
                        height: `${Math.max(0, 120 - (dist * dist / gridWidth) * 2)
                            }%`,
                    }} className='bg-slate-900 aspect-square text-xs rounded-full'>

                    </div>
                    </div>
                }
                )}
            </div>
        </div>
        }
    </>
}
function roundToNearest(value: number, interval: number) {
    return Math.round(value / interval) * interval;
}

export default Background;