import React from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({children}) => {
    const [data, setData] = React.useState([])
    const [wishlist, setWishList] = React.useState([])
    const [masterAuth, setMasterAuth] = React.useState(false)
    return(
        <ProductContext.Provider value={{masterAuth,data,setMasterAuth, setData,wishlist,setWishList}}>
        {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
