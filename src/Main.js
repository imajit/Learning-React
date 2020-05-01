import React from "react"
import Listlist from "./Listlist"
import Product from "./Product"
import Data from "./data/sample_data"
import './stylesheets/main.css';

function Main() {

    const productComponents = Data.map(item => <Product key={item.id} data={item}/>)

    const date = new Date();
    const dd=date.getHours();
    let time = "Good Morning"
    const style = {
        fontSize : 24
    }
    style.color = "red"
    if(dd>=12 && dd<17)
    {
        time="Good evening"
        style.color="green"
    }
    if(dd>17)
    {
        time="Good Night"
        style.color="blue"
    }

    return (
        <div>
            <h3 style={style}> {`${time}` }</h3>            
            <Listlist 
                information = {{
                    name: "ola",
                }}
            />
            <Listlist 
                information = {{
                    name: "gracias",
                    surname: "amigos"
                }}
            />
            <Listlist 
                information = {{
                    name: "ciao",
                    surname: "amigos"
                }}
            />
            <table>
                {productComponents}
            </table>

        </div>
    );
}

export default Main;