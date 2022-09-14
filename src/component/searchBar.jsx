
import { BiSearch } from 'react-icons/bi'
const SearchBar = () => {
    return ( 
        <div className="flex w-100 h-10  justify-center bg-white ">
            <form action="" className="flex">
                <BiSearch className='pt-2' size={28}/>
                <input type="text" placeholder="Search for minimalist chair" className='w-80 h-10' />
                

            </form>
        </div>
     );
}
 
export default SearchBar;