import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div className=' w-screen flex justify-center items-start'>
            <div className=' w-fit flex flex-wrap
            flex-col gap-12 justify-between 
            items-center
            lg:flex-row lg:gap-24 lg:items-end
            '>
                <div className='w-fit pt-24'>
                    <ProfilePicture />
                </div>
                <div className=' flex flex-col justify-start items-start'>
                    <IntroductionText />
                    <WorkList />
                </div>
            </div>
        </div>
    );
}

export default InfoCard;