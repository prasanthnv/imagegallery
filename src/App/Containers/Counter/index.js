import React, { Component } from 'react';
import {connect} from 'react-redux';
import {countUp,countDown} from '../../Redux/Modules/Counter/action'
class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    counterBtnHandler = (action) => {
        this.props.countUp()
        console.warn(this.props)
    }
    render() {
      

        const button_style = {
            color:"#f5f5f5",
            backgroundColor:"#222527"
        }
        return (
            <React.Fragment>
                <h1>Counter : {this.props.counter}</h1>
                <button onClick={()=>this.counterBtnHandler('up')}style={button_style}>Count up</button>
                <button onClick={()=>this.counterBtnHandler('down')} style={button_style}>Count Down</button>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    counter: state.counter.counter
})
export default connect(mapStateToProps,{countUp,countDown})(CounterContainer);