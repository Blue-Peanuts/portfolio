import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import BluePicture from "./BluePicture";
import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div className=' w-screen h-screen flex justify-center items-start'>
            <div className=' w-fit flex justify-between pt-20
            flex-col gap-12 items-center  
            xl:flex-row xl:gap-32 xl:items-start
            '>
                <div className='w-fit lg:pb-12'>
                    <ScrollAnimation initialClass='opacity-none' animationClass='rotate-reveal-4' className='pt-4'>
                        <ProfilePicture />
                    </ScrollAnimation>
                </div>
                <div className=' flex flex-col justify-start items-start gap-8'>
                    <IntroductionText />
                    <div className='flex flex-row items-end justify-between w-full 
                    pl-3 pr-3 
                    sm:pl-0 sm:pr-0'>
                        <WorkList />
                        <div className='w-fit h-full pl-8
                        mb-0
                        lg:-mb-7 '>
                            <ScrollAnimation initialClass='opacity-none' animationClass='rotate-reveal-2'>
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