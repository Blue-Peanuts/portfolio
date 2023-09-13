import profilePicture from '../assets/profile.jpg';
import './ProfilePicture.scss';

function ProfilePicture() {
    return <div className=' w-fit'>
        <div className=' 
        w-56 rounded-2xl border-4
        md:w-80 md:rounded-3xl md:border-8 
        lg:w-96 lg:rounded-3xl lg:border-8
        aspect-square flex justify-center items-center border-sky-500
        outer
        '>
            <div className=' 
            w-10/12 border-4 rounded-2xl
            md:w-10/12 md:border-8 md:rounded-3xl
            aspect-square flex justify-center items-center border-orange-500 middle'>
                <img src={profilePicture} className=" w-11/12 aspect-square object-cover rounded-full inner" alt="" />
            </div>
        </div>
    </div>
}

export default ProfilePicture;