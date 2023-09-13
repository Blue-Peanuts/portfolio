import { useEffect } from "react";
import { useState } from "react";

function TextAnimation(props: {texts: string[], secondsPerFrame: number})
{
    const [text, setText] = useState(props.texts[0]);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            console.log('interval');
            i = (i + 1) % props.texts.length;
            setText(props.texts[i]);
        }, props.secondsPerFrame * 1000);
        return () => clearInterval(interval);
    }, [props.texts, props.secondsPerFrame]);


    return <>
        {text}
    </>
}

export default TextAnimation;