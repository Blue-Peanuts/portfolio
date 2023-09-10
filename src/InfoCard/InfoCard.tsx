import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div className=' w-fit sm:w-1/2 flex 
            flex-row gap-24 justify-between align-middle
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