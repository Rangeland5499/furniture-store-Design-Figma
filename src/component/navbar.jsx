import {Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import {TbShoppingCart} from 'react-icons/tb';
import SearchBar from "../component/searchBar";


const Navbar = ({item}) => {
    return ( 
        <div className="flex ml-10">
       <a href="">{item}</a>
        </div>
     );
}
 
export default Navbar;