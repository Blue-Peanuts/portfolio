import Section from "../Section";
import Music from '../assets/music.svg';

function MusicSection() {
    return <Section bgColor='bg-indigo-500' textColor='text-indigo-500' borderColor='border-indigo-500' name='MUSIC' svg={Music}>
        <div className='h-fit  gap-20 justify-center items-start pt-10 pb-10 flex flex-row flex-wrap'>
            <iframe width="500" height="280" src="https://www.youtube.com/embed/B8vL77mpnbA?si=fk9f20sVNAEkrOBt"
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe width="500" height="280" src="https://www.youtube.com/embed/A1SqRIaJ-3M?si=ByA8nJXtYgrCqio5"
                title="YouTube video player" allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe width="500" height="280" src="https://www.youtube.com/embed/77NuQ7CV21c?si=OPSH6_r889QD1myF"
                title="YouTube video player" allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe width="500" height="280" src="https://www.youtube.com/embed/R-oe65kpWKo?si=t_jmAoDC1lZNIA6l"
                title="YouTube video player" allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe width="500" height="280" src="https://www.youtube.com/embed/vATCEaf9a4I?si=kV81HDTneKBMZkll"
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe width="500" height="280" src="https://www.youtube.com/embed/VKP1DEJaO4k?si=OQbZXKYW0h7OoRnC"
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </Section>
}

export default MusicSection;