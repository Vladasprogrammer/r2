import { useContext } from "react"
import RouterContext from "../contexts/Router"

export default function Product() {



    const [id] = useContext(RouterContext).params;
    
    return (
        <div>
            <h1>Product</h1>
            <p>Product ID: {id}</p>
        </div>
    )
}