import React, { Component, PropTypes } from 'react';
var D3PieChart = require('react-d3-basic').PieChart;

var generalChartData = [{"age": "<5", "population": "2704659"},{"age": "5-13", "population": "4499890"},{"age": "14-17", "population": "2159981"},{"age": "18-24", "population": "3853788"},{"age": "25-44", "population": "14106543"},{"age": "45-64", "population": "8819342"},{"age": "≥65", "population": "612463"}];
var width = 720,
    height = 360,
    radius = Math.min(width, height - 90) / 2,
    margins = {top: 50, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    title = "Pie Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    showLegend = true,
    value = function(d) {
      return +d.population;
    },
    name = function(d) {
      return d.age;
    },
    chartSeries = [
      {
        "field": "<5",
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ],
    legendPosition = 'right',
    outerRadius = radius - 10,
    innerRadius = 0;


class PieChart extends Component {


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
                    <D3PieChart
                        width= {width}
                        height= {height}
                        data= {generalChartData}
                        chartSeries= {chartSeries}
                        value = {value}
                        name = {name}
                    />
                </div>
            );
        }

        return body;
    }
}

PieChart.displayName = 'PieChart';

PieChart.propTypes = {
    title:    PropTypes.string,
    info:     PropTypes.string
};



export default PieChart;
