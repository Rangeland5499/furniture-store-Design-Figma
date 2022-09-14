import Navbar from "../component/navbar";
import {AiOutlineHeart} from 'react-icons/ai'
import {TbShoppingCart} from 'react-icons/tb';
import SearchBar from "../component/searchBar";
import img from "../img/img.png"
const Header  = () => {
    return ( 
        <div class=" flex h-48">
  
       
            

            <div class="flex m-auto space-x-4 pt-10 bg-[#F9F1E7] w-2/3 h-48 ">
                <Navbar item="Funiro." className="font-bold"> </Navbar>
                <Navbar item="Products"></Navbar>
                <Navbar item="Rooms"></Navbar>
                <Navbar item="Inpspiration"></Navbar>
                
                <SearchBar></SearchBar>
          </div>
          <div className="flex bg-[#FCF8F3] w-1/3 h-48 justify-center gap-6 pt-10">
            
              <a href=""><AiOutlineHeart size={30}></AiOutlineHeart></a>
              <a href=""><TbShoppingCart size={30}></TbShoppingCart></a>
              <a href=""><img src={img} alt="" style={{widt:"40px", height:"40px"}}/></a>

          </div>
         
        </div>

     );
}
 
export default Header ;