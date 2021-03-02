import React from "react"


class Clock extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)

        this.state = {
            time: new Date(),
        };

        this.tick = this.tick.bind(this)
    }

    tick() {
        this.setState({time: new Date()});

    }

    componentDidMount() {
        this.intervalID = setInterval(this.tick,1000)
    }

    componentDidUnMount() {

    }

    render() {
        let seconds = this.state.time.getSeconds();
        let minutes = this.state.time.getMinutes();
        let hours = this.state.time.getHours();

        return(
            <div>
                <h1>Clock</h1>

                <span>
                    {hours} : {minutes} : {seconds}
                </span>
            </div>
            
        );

        
    }


}

export default Clock