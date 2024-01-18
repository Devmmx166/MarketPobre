
import './ProductCard.css'
import { FaCartPlus } from "react-icons/fa6";
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatoDaMoeda' //importação da conversão de moeda
function ProductCard({data}){
const {title, thumbnail, price} = data;


    return(
        <section className="product-card">
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} //pega a imagem vinda da api e melhora a imagem
            alt="product"  
            className="card_image"/>

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
