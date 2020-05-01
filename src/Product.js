import React from "react"
import Data from "./data/sample_data"

function Product(props) {

    return(
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.surname}</td>
            <td>{props.data.mail}</td>
        </tr>
    )
}

export default Product