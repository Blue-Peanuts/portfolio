import { useEffect, useRef, useState } from 'react';
import React from 'react';
import './ScrollAnimation.scss';


function ScrollAnimation(props: { initialClass: string, animationClass: string, children: React.ReactNode}) {
    // if this component is in view, then set the class to onIntersection
    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
    }, []);
    
    return (
        <div ref={ref} className={  props.initialClass + ' ' +
                                    (isIntersecting ? props.animationClass : ' ')}>
            {props.children}
        </div>
    );
}

export default ScrollAnimation;