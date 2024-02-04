import { useState } from "react";
import AppContext from "./AppContext";
import PropTypes  from "prop-types";


function Provider({children}){

    const [products, setProducts] = useState([]);


    const  value ={
     products,
     setProducts
    }

    return(
        <AppContext.Provider value={value}>
          {children}
        </AppContext.Provider>
    )
}

export default Provider;

Provider.PropTypes = {
    children: PropTypes.any,
}.isRequired