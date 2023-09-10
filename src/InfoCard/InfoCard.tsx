import BluePicture from "./BluePicture";
import IntroductionText from "./IntroductionText";
import ProfilePicture from "./ProfilePicture";
import WorkList from "./WorkList";

function InfoCard() {
    return (
        <div className=' w-screen flex justify-center items-start'>
            <div className=' w-fit flex
            flex-col gap-12 justify-between 
            items-center
            xl:flex-row xl:gap-32 xl:items-end pt-20
            
            '>
                <div className='w-fit pb-12'>
                    <ProfilePicture />
                </div>
                <div className=' flex flex-col justify-start items-start gap-8'>
                    <IntroductionText />
                    <div className='flex flex-row items-end gap-16'>
                        <WorkList />
                        <div className='w-fit h-full -mb-7'>
                            <BluePicture />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default InfoCard;