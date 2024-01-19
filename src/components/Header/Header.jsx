import SearchBar from "../SearchBar/SearchBar";
import CartButton from "../CartBotton/Carbutton";
import './Header.css';
import Logo from "../Logo/Logo";
import LoginButton from "../LoginButton/LoginButton";
function Header(){

return (

    //botão de busca e input
   <header className="header">
    <div className="container-header" >
       <Logo/>
       <SearchBar/>
       <LoginButton/>
       <button> <CartButton/></button>
    </div>
   </header>
)
}

export default Header;