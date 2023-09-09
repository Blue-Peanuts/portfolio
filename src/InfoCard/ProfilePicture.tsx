import profilePicture from '../assets/profile.jpg';
function ProfilePicture()
{
    return <div>
        <img src={profilePicture} className=" w-28 h-28 object-cover rounded-full" alt=""/>
    </div>
}

export default ProfilePicture;