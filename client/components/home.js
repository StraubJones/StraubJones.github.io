const React = require('react');
const Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;

const options = {
  duration: 500,
  delay: 100,
  smooth: true,
};
let elementName;

function scrollTo(elementName){
  console.log('scrolling to: ', elementName);
  scroller.scrollTo(elementName, options);
}
function scrollToFirst(){
  elementName = "first-project";
  scrollTo(elementName);
}
function scrollToSecond(){
  elementName = "second-project";
  scrollTo(elementName);
}
function scrollToThird(){
  elementName = "third-project";
  scrollTo(elementName);
}

class Home extends React.Component {
  render(){
    return (
      <div>
        <figure className="hero">
          <img alt="Headshot" src="./images/headshot.jpg" />
          <h1>Welcome!</h1>
          <figcaption>I am Christian Straubhaar-Jones, a full-stack web developer.
          I build apps that enable better teamwork, that can reach more users through accessibility, and that explore alternative tools to find more robust solutions.
          </figcaption>
        </figure>
        <button onClick={scrollToFirst} className="examples">
          SOME EXAMPLES
          <i className="fa fa-2x fa-arrow-down"></i>
        </button>
        <Element className="project-snapshot" name="first-project" id="first-project">
          <img alt="project screenshot" src="./images/CollaBoard.png" />
        </Element>
        <button onClick={scrollToSecond} className="examples">
          EVEN MORE
          <i className="fa fa-2x fa-arrow-down"></i>
        </button>
        <Element className="project-snapshot" name="second-project" id="second-project">
          <img alt="project screenshot" src="./images/Tournament Manager.png" />
        </Element>
        <button onClick={scrollToThird} className="examples">
          MORE STILL
          <i className="fa fa-2x fa-arrow-down"></i>
        </button>
        <Element className="project-snapshot" name="third-project" id="third-project">
          <img alt="project screenshot" src="./images/Wage Gap Calculator.png" />
        </Element>
      </div>
    )
  }
}

  module.exports = Home;
