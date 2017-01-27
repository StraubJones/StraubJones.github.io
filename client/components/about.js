const React = require('react');
const d3 = require('../vendor/d3.min.js');

let chartWidth, chartHeight;

let chartMargins = {
  top: 20,
  right: 50,
  left: 50,
  bottom: 50
}

class About extends React.Component {
  //ideas: http://bl.ocks.org/mbostock/3885304
  //more ideas (stretch goal): http://bl.ocks.org/mbostock/3885705
  //good ideas about dimensions: http://blog.webkid.io/responsive-chart-usability-d3/#Use_aspect_ratio_instead_of_fixed_heightr
  componentDidMount(){
    this.updateChartSize(window.innerWidth);
    window.addEventListener("resize", ()=>this.updateChartSize(window.innerWidth));
  }
  updateChartSize(winWidth) {
    let self = this;
    this.setState({
      chartWidth: winWidth - chartMargins.right - chartMargins.left
    }, ()=>{
      self.setState({
        chartHeight: self.state.chartWidth * 0.7
      }, ()=>{
        var vis = d3.select('.bar-graph')
          .html("")
          .append('svg')
          .attr('width', this.state.chartWidth)
          .attr('height', this.state.chartHeight);
      });

    });
  }
  render(){
    return (
      <div className="main">
        <figure className="section-header">
          <h1>About Me</h1>
          <figcaption className="center">I have lived across Europe, North and South America.
            <br></br>I have examined 650-year-old manuscripts under blacklight to find <a href="https://en.wikipedia.org/wiki/Palimpsest">palimpsests</a>.
            <br></br>I've found my passion in software development. I'd like to share it with you.
          </figcaption>
        </figure>
        <figure className="bar-graph">

        </figure>
      </div>
    )
  }
}

  module.exports = About;
