import bluePicture from '../assets/bluenuts.png';
import './BluePicture.scss';
function BluePicture() {
    return <div className='w-24
    md:w-32 md:rounded-3xl 
    lg:w-40 lg:rounded-3xl'>
        <div className='jumping'>
            <div className=' 
         lg:border-8 md:border-8  rounded-2xl  border-4 
        aspect-square flex justify-center items-center border-sky-500 
        rotate-[-18deg]
        '>

                <img src={bluePicture} className=" w-10/12 aspect-square 
                 object-cover rounded-full anti-squish" alt="" />
            </div>
        </div>
    </div>
}

export default BluePicture;