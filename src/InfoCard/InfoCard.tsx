import ScrollAnimation from "../Animations/ScrollAnimation";
import BluePicture from "./BluePicture";
import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div className=' w-screen flex justify-center items-start pb-20'>
            <div className=' w-fit flex
            flex-col gap-12 justify-between 
            items-center
            xl:flex-row xl:gap-32 xl:items-end pt-20
            
            '>
                <div className='w-fit lg:pb-12'>
                            <ScrollAnimation initial='opacity-none' onIntersection='animate-rotate-reveal-delay-1' fit={true}>
                    <ProfilePicture />
                    </ScrollAnimation>
                </div>
                <div className=' flex flex-col justify-start items-start gap-8'>
                    <IntroductionText />
                    <div className='flex flex-row items-end justify-between w-full pl-3 pr-3 sm:pl-0 sm:pr-0'>
                        <WorkList />
                        <div className='w-fit h-full mb-0 lg:-mb-7 pl-8'>

                            <ScrollAnimation initial='opacity-none' onIntersection='animate-rotate-reveal-delay-1' fit={true}>
                                <BluePicture />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default InfoCard;