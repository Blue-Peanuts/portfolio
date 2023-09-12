import { useEffect, useRef, useState } from 'react';

function ScrollAnimation(props: { initial: string, onIntersection: string, children: React.ReactNode, fit?: boolean}) {
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

    useEffect(() => {
        if(!ref.current) return;

        if (isIntersecting) {
            ref.current.classList.add(props.onIntersection);
        } else {
            ref.current.classList.remove(props.onIntersection);
        }
    }, [isIntersecting, props.onIntersection, props.initial]);
    return (
        <div className={' flex justify-center items-center ' + props.initial + (props.fit? ' w-fit h-fit' : ' w-full h-full ')} ref={ref}>
            {props.children}
        </div>
    );
}

export default ScrollAnimation;