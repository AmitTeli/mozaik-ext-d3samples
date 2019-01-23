import React, { Component, PropTypes } from 'react';
var LineChart = require('react-d3-basic').LineChart;
var data = [
    {
        "age": 39,
        "index": 0
    },
    {
        "age": 30,
        "index": 1
    },
    {
        "age": 34,
        "index": 2
    },
    {
        "age": 12,
        "index": 3
    }
];

var chartSeries = [
    {
      field: 'age',
      name: 'Age',
      color: '#ff7f0e',
      style: {
        "stroke-width": 2,
        "stroke-opacity": .2,
        "fill-opacity": .2
      }
    }
  ],
  x = function(d) {
    return d.index;
  };

class Chart extends Component {


    componentDidMount() {

    }

    render() {



        const { title } = this.props;


        if (title) {
            let titleText = title;
            if (title.indexOf('::') === 0) {
                titleText = this.state.moment.format(title.substring(2));
            }

            return (
                <div>
                    <div className="widget__header">
                        {titleText}
                    </div>
                    <LineChart width= {600} height= {300} data= {data} chartSeries= {chartSeries} x= {x} />
                </div>
            );
        }

        return body;
    }
}

Chart.displayName = 'Chart';

Chart.propTypes = {
    title:    PropTypes.string,
    info:     PropTypes.string
};



export default Chart;
