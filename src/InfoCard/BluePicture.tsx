import bluePicture from '../assets/bluenuts.png';
function BluePicture() {
    return <div className=' w-fit -rotate-6'>
        <div className=' 
        w-56 rounded-2xl border-4
        md:w-80 md:rounded-3xl md:border-8 
        lg:w-40 lg:rounded-3xl lg:border-8
        aspect-square flex justify-center items-center border-sky-500 -rotate-12
        '>
            <div className = 'rotate-12 w-full h-full flex justify-center items-center'>
                <div className = 'rotate-6 w-full h-full flex justify-center items-center'>
                    <img src={bluePicture} className=" w-10/12 aspect-square object-cover rounded-full" alt="" />
                </div>
            </div>
        </div>
    </div>
}

export default BluePicture;