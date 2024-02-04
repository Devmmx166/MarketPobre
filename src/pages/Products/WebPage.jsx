import Header from "../../components/Header/Header";
import Provider from "../../context/Provider";
import Products from "./Products";

function WebPage(){
 
    return(
       <Provider>
        <Header/>
        <Products/>
        </Provider>
    )
}

export default WebPage;