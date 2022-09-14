import Service from '../component/service';
import {GiTrophyCup} from 'react-icons/gi';
import {HiOutlineBadgeCheck} from "react-icons/hi"


const Services = () => {
    return ( 
        <div className=' justify-center mb-40 grid grid-cols-4 gap-7 relative w-4/5 m-auto'>
         <div className='flex'>
         <GiTrophyCup size={45} />
         <Service service="High Quality" text="Crafted from top materials"></Service>
         </div>
         <div className='flex'>
         <HiOutlineBadgeCheck size={45}/>
         <Service service="Warrant Protection" text="Crafted from top materials"/>

         </div>
         <div className='flex'>
         <HiOutlineBadgeCheck size={45}/>
         <Service  service="Free Shipping" text="Crafted from top materials"/>

         </div>
         <div className='flex'>
         <HiOutlineBadgeCheck size={45}/>
         <Service  service="24 / 7 Support" text="Crafted from top materials"/>

         </div>

        </div>
     );
}
 
export default Services;