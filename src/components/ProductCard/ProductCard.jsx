
import './ProductCard.css'
import { FaCartPlus } from "react-icons/fa6";
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatoDaMoeda' //importação da conversão de moeda
function ProductCard({data}){
const {title, thumbnail, price} = data;
const handleClick = () => {
    if (password.length >= 8) {
    navigate(`/Product/${}`)
    } else {
      alert('Senha te que ser maior que 8 caracters')
    }

    return(
        <section className="product-card" onClick={handleClick}>
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} //pega a imagem vinda da api e melhora resolução da imagem
            alt="product"  
            className="card_image" />

            <div className="card-infos">
            <h2 className="card-price"> {formatCurrency(price, 'BRL')}                            
            </h2>
            <h2 className="card-title"> {title}</h2>
            </div>

        <button className="button_card-add"><FaCartPlus /></button>
        </section>
    )
}

export default ProductCard;
ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
