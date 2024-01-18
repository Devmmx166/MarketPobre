import SearchBar from "../SearchBar/SearchBar";
import CartButton from "../CartBotton/Carbutton";
import './Header.css';
import Logo from "../Logo/Logo";
function Header(){

return (

    //botão de busca e input
   <header className="header">
    <div className="container-header" >
       <Logo/>
       <SearchBar/>
    
       <button> <CartButton/></button>
    </div>
   </header>
)
}

export default Header;