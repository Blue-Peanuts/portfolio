import Section from "../Section";
import Illustration from '../assets/illustrations.svg';

function IllustrationSection() {
    return <Section bgColor='bg-fuchsia-500' textColor='text-fuchsia-500' borderColor='border-fuchsia-500' name='ILLUSTRATION' svg={Illustration}>
        <div className=' text-white flex items-center justify-center p-10 text-3xl'>
            In progress...
        </div>
    </Section>
}

export default IllustrationSection;