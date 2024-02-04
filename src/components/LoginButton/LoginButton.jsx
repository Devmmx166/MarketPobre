import "./LoginButton.css"
import { IoEnterOutline } from "react-icons/io5";
function LoginButton(){


    return (
        <div >
     <div id="botao-login"><label className="label-login" htmlFor="botao-login">{<IoEnterOutline />} <span id="nome-login">Login</span> </label></div>
        </div>
    )
}

export default LoginButton;