import React from 'react';
import TimeLineGraph from '../components/TimeLineGraph';
import axios from 'axios';


export default class Stock extends React.Component {

    constructor() {
        super();
        this.state = {
            stock_price: [],
        };
    }
    componentDidMount() {
        var _this = this;
        axios.get('https://www.quandl.com/api/v3/datasets/OPEC/ORB.json?api_key=s8a7SZvi5CWLMWMQAnQ8').then(function (res) {
            _this.setState({
                stock_price: res.data.dataset
            });
        })
            .catch(function (e) {
                console.log("ERROR ", e);
            })
    }

    render() {
        return (
            <div>
                <div style={{ position: "relative", width: '20%' }}><TimeLineGraph /></div>
                <div>hello</div>
                <ul>
                {this.state.stock_price ? (this.state.stock_price.data ? this.state.stock_price.data.map((reptile) => <li>{reptile[1]}</li>) : 'data null') : 'Object still NULL'}
                </ul>
            </div>
        );
    }
}