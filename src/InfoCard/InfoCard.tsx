import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div>
            <ProfilePicture/>
            <IntroductionText/>
            <WorkList/>
        </div>
    );
}

export default InfoCard;