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

    return <>
        <div className=' h-screen w-screen absolute -z-10'>
            <div style={
                {
                    top: roundToNearest(mousePos.y + scrollPosition - windowsWidth / 4, windowsWidth / 12),
                    left: roundToNearest(mousePos.x - windowsWidth / 4, windowsWidth / 12),
                    position: 'absolute',
                    height: '50vw'
                }
            } className='aspect-square grid grid-cols-6 grid-rows-6'>
                {Array.from(Array(36).keys()).map((i) => {

                    const x = i % 6;
                    const y = Math.floor(i / 6);
                    const gridPosX = roundToNearest(mousePos.x - windowsWidth / 4, windowsWidth / 12);
                    const gridPosY = roundToNearest(mousePos.y + scrollPosition - windowsWidth / 4, windowsWidth / 12);
                    const posX = gridPosX + (x + 0.5) * windowsWidth / 12;
                    const posY = gridPosY + (y + 0.5) * windowsWidth / 12;
                    const distX = Math.abs(posX - mousePos.x);
                    const distY = Math.abs(posY - mousePos.y - scrollPosition);
                    const dist = Math.sqrt(distX * distX + distY * distY);
                    return <div className=' flex justify-center items-center'> <div key={i} style={{
                        height: `${
                            Math.max(0, 100 - (dist*dist / windowsWidth * 2))
                        }%`,
                    }} className='bg-slate-900 aspect-square text-xs rounded-full'>
                    
                    </div>
                    </div>
                }
                )}
            </div>
        </div>
        <div className=' h-screen w-screen fixed -z-10'>
            <div className=' h-100 w-10 bg-white'>{mousePos.x} {mousePos.y + scrollPosition} {windowsWidth} {scrollPosition}</div>
        </div>
    </>
}
function roundToNearest(value, interval) {
  return Math.round(value/interval) * interval;
}

export default Background;