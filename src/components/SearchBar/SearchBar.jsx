
import { CiSearch } from "react-icons/ci";
import './SearchBar.css'
import { useContext, useState } from "react";
import fetchProducts from '../../Api/fetchProducts '
import AppContext from "../../context/AppContext";
function SearchBar(){
   
   //estado e função atualizadora
     const {setProducts} = useContext(AppContext)
   const [searchValue, setSearchValue] = useState('');
 
  
   const handleSearch = async (event)=>{
  
      event.preventDefault();

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setSearchValue('');
   };

    return(
 <form className='search-bar' onSubmit={handleSearch}>
  
        <input 
         type="search"
         value={searchValue}
         placeholder="Buscar produtos" 
         className="search_input"
         onChange={({target})=> setSearchValue(target.value)}  //função atualizadora
         required
          />

        
    <button type="submit" className="search_button">
     <CiSearch />
    </button>
  
    </form>
    );
}

export default SearchBar;