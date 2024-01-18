import './Carbutton.css'
import { BsCart4 } from "react-icons/bs";


function CartButton(){
    return(
        <button className="Carbutton"> <BsCart4 />
        <span className='cart-status'>
            1
        </span>
        </button>
    )
}

export default CartButton;