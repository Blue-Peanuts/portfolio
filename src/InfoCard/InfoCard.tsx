import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div className=' w-fit sm:w-1/2'>
            <ProfilePicture/>
            <IntroductionText/>
            <WorkList/>
        </div>
    );
}

export default InfoCard;