import React, { Component, PropTypes } from 'react';
const ReactHighcharts = require('react-highcharts');
import HC_3D from 'highcharts/highcharts-3d';

HC_3D(ReactHighcharts.Highcharts);
import HC_Cy from 'highcharts/modules/cylinder';
HC_Cy(ReactHighcharts.Highcharts) //init module

const config = {
    chart: {
        type: 'cylinder',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Highcharts Cylinder Chart'
    },
    plotOptions: {
        series: {
            depth: 25,
            colorByPoint: true
        }
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        name: 'Cylinders',
        showInLegend: false
    }]
};
  

class HighChart3D extends Component {


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
                    <ReactHighcharts config={config} ></ReactHighcharts>
                </div>
            );
        }

        return <div />;
    }
}

HighChart3D.displayName = 'HighChart3D';

HighChart3D.propTypes = {
    title:    PropTypes.string,
    info:     PropTypes.string
};



export default HighChart3D;
