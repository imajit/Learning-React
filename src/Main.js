import React from "react"

function Main() {

    const date = new Date();
    const dd=date.getHours();
    const time = "Good Morning"
    if(dd>=12 && dd<17)
    {
        time="Good evening"
    }
    if(dd>17)
    {
        time="Good Night"
    }

    return (
        <div>
            <h3> {`${time}` }</h3>
            <ul>
            <li>
                Apple
            </li>
            <li>
                Banana
            </li>
            <li>
                Orange
            </li>
            </ul>
        </div>
    );
}

export default Main;