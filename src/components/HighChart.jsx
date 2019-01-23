import React, { Component, PropTypes } from 'react';
const ReactHighcharts = require('react-highcharts');


const config = {
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }],
    chart: {renderTo : 'highchart_id'}
  };
  

class HighChart extends Component {

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

HighChart.displayName = 'HighChart';

HighChart.propTypes = {
    title:    PropTypes.string,
    info:     PropTypes.string
};


export default HighChart;
