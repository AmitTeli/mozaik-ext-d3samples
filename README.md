# Mozaïk sample d3 widgets

These are a few samples showing how different react d3 charts can be composed into [Mozaïk dashbaord framework](https://github.com/plouc/mozaik).

There are examples using [react-chartjs](https://github.com/reactjs/react-chartjs), [react-d3-basic](https://github.com/react-d3/react-d3-basic) and [react-highcharts](https://github.com/kirjs/react-highcharts).

* high_chart - line chart using react-highcharts
* bubble_chart - buble chart using react-highcharts
* high_chart_three_d - 3D cylinder column chart using react-highcharts
* pie_chart - pie chart using react-d3-basic
* chart - line chart using react-d3-basic
* bar_chart_widget - bar chart using react-chartjs

For now, for all samples, data is hard-coded. They can be parameterised later. Even the width and hegith properties are hardcoded, so one needs to adjust them as well. As of now, these can be more of a reference.

**Please note** while using with [Mozaïk Demo](https://github.com/plouc/mozaik-demo), ensure to upgrade demo project react dependencies to __*0.14.9 or above*__. else these widgets won't work!

### parameters

key        | required | description
-----------|----------|----------------------------------------------------
`title`    | no       | *Title of the widget*

### usage
In the the dashboard (e.g.[demo](https://github.com/plouc/mozaik-demo)), import the module in App.jsx

```javascript
import d3samples from 'mozaik-ext-d3samples';
```
Then include it in addExtensions along with other extensions
```javascript
Mozaik.Registry.addExtensions({
    github,
    travis,
    time,
    d3samples
});

```

In the config.js, one can then use it as below example.
```javascript
{
  type: 'd3samples.chart',
  info: 'Sample d3-basic chart',
  columns: 1, rows: 1, x: 0, y: 0
}
```
