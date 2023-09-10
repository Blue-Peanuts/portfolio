import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div className=' w-screen flex justify-center items-start'>
            <div className=' w-fit flex
            flex-col gap-12 justify-between 
            items-center
            lg:flex-row lg:gap-32 lg:items-end pt-20
            '>
                <div className='w-fit pb-12'>
                    <ProfilePicture />
                </div>
                <div className=' flex flex-col justify-start items-start gap-8'>
                    <IntroductionText />
                    <WorkList />
                </div>
            </div>
        </div>
    );
}

export default InfoCard;