import React from "react"
import ReactDOM from "react-dom"
import Clock from "./clock"
import Tabs from "./tabs"

const tabsArray = [
    {title: "1", content: "1st content"},
    {title: "2", content: "2nd content"},
    {title: "3", content: "3rd content"},
]
function Main () {
    return (
        <div>
            <Clock />
            <div>
                <Tabs tabsArray={tabsArray} />
            </div>
        </div>
    )
}
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root")

    ReactDOM.render(<Main />, root);
});