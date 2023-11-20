import Section from "../Section";
import AppCard from "./AppCard";
import BubbleTilesCard from "../assets/bubble_tiles_card.png";
import MonobehaviourNameMatcher from "../assets/monobehaviour_name_matcher.png"
import AppSvg from "../assets/appsandtools.svg";

function AppsSection() {
    return <Section bgColor='bg-emerald-500' textColor='text-emerald-500' borderColor='border-emerald-500' name='APPS AND TOOLS' svg={AppSvg}>
        <div className='h-fit  gap-10 justify-center items-start pt-10 pb-10 flex flex-row flex-wrap'>
            <AppCard
                name='React Bubble Tiles'
                img={BubbleTilesCard}
                animateOrder={0}
                lines={[
                    'A React component which adds a bubble effect to a website.',
                    'Used in this website.',
                    'Customizable color, size, and more.',
                    'Demo available.']}
                link="https://github.com/Blue-Peanuts/react-bubble-tiles/" />
            <AppCard
                name='MonoBehaviour Name Matcher'
                img={MonobehaviourNameMatcher}
                animateOrder={1}
                lines={[
                    'A VSCode extension for Unity developers.',
                    'Quickly rename MonoBehaviour classes to match the file name with a keyboard shortcut.',
                    'Available on the VSCode extension marketplace.']}
                link="https://github.com/Blue-Peanuts/monobehaviour-name-matcher/" />
        </div>
    </Section>
}

export default AppsSection;