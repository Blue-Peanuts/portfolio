import bluePicture from '../assets/bluenuts.png';
import './BluePicture.scss';
function BluePicture() {
    return <div className='w-24
    md:w-32 
    lg:w-40'>
        <div className='jumping '>

                <img src={bluePicture} className=" w-10/12 aspect-square 
                 object-cover rounded-full" alt="" />
        </div>
    </div>
}

export default BluePicture;