import React from "react"
function Listlist(props) {
    const {name,surname} = props.information
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li style={{display: !surname && "none"}}>Surname: {surname}</li>
            </ul>
            <hr/>
        </div>
    )
}
export default Listlist