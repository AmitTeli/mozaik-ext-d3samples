import React, { PropTypes } from 'react';
var BarChart = require("react-chartjs").Bar;

function rand(min, max, num) {
    var rtn = [];
    while (rtn.length < num) {
      rtn.push((Math.random() * (max - min)) + min);
    }
    return rtn;
  };
  
function data1() {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: rand(32, 100, 7)
          },
          {
              label: "My Second dataset",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: rand(32, 100, 7)
          }
      ]
    };
  }

  
class BarChartW extends React.Component {

    
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
                    <div> 
                    <BarChart
                        data={data1()}
                    />
                    </div>
                </div>
            );
        }

        return <div />;
    }
};

BarChartW.displayName = 'Bar';

BarChartW.propTypes = {
    title:    PropTypes.string,
    info:     PropTypes.string
};



export default BarChartW;
