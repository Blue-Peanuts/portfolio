import profilePicture from '../assets/profile.jpg';
function ProfilePicture() {
    return <div>
        <div className=' w-5/12 aspect-square flex justify-center items-center border-8 rounded-3xl border-sky-500 rotate-12'>
            <div className=' w-10/12 aspect-square flex justify-center items-center border-8 rounded-3xl border-orange-500 rotate-12'>
                <div className = '-rotate-12 w-fit h-fit flex justify-center items-center'>
                    <img src={profilePicture} className=" m-1 w-11/12 aspect-square object-cover rounded-full -rotate-12" alt="" />
                </div>
            </div>
        </div>
    </div>
}

export default ProfilePicture;