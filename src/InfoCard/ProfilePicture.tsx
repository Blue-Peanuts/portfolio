import profilePicture from '../assets/profile.jpg';
function ProfilePicture() {
    return <div>
        <div className=' w-fit flex justify-center items-center border-4 rounded-lg border-sky-500 p-3 rotate-12'>
            <div className=' w-fit flex justify-center items-center border-4 rounded-lg border-orange-500 p-1 rotate-12'>
                <div className = '-rotate-12'>
                    <img src={profilePicture} className=" m-1 w-28 h-28 object-cover rounded-full -rotate-12" alt="" />
                </div>
            </div>
        </div>
    </div>
}

export default ProfilePicture;