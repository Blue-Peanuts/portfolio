import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div className=' w-fit sm:w-1/2 flex 
            flex-col gap-12 justify-between align
            lg:flex-row lg:gap-24
            '>
            <ProfilePicture/>
            <div>
                <IntroductionText/>
                <WorkList/>
            </div>
        </div>
    );
}

export default InfoCard;