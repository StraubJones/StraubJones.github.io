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
          <i className="fa fa-2x fa-caret-down"></i>
        </button>
        <Element className="project-snapshot" name="first-project" id="first-project">
          <img alt="project screenshot" src="./images/CollaBoard.png" />
          <h1>CollaBoard</h1>
          <a href="https://collaboard-app.herokuapp.com/">SEE THE APP</a>
          <a href="https://github.com/CollaBoard/CollaBoard">PERUSE THE CODE</a>
          <figcaption>Built with Postgres, React, Redux, Express, and Node </figcaption>
          <figcaption>Also uses Socket.io, HTML5 Canvas, WebRTC, Draft.js, and Prism.js </figcaption>
          <p>A live-synched whiteboard and text editor, with peer-to-peer video chat and typed chat. Ideal for remote classrooms, for remote team management, and for technical interviewing.</p>
          <h4>My focus: Redux, Text editor with JS syntax highlighting (built on Draft.js, Prism.js), Scrum master leadership (led team meetings, curated project Github boards, and groomed backlog).</h4>
        </Element>
        <button onClick={scrollToSecond} className="examples">
          EVEN MORE
          <i className="fa fa-2x fa-caret-down"></i>
        </button>
        <Element className="project-snapshot" name="second-project" id="second-project">
          <img alt="project screenshot" src="./images/TournamentManager.png" />
        </Element>
        <button onClick={scrollToThird} className="examples">
          MORE STILL
          <i className="fa fa-2x fa-caret-down"></i>
        </button>
        <Element className="project-snapshot" name="third-project" id="third-project">
          <img alt="project screenshot" src="./images/WageGapCalculator.png" />
        </Element>
      </div>
    )
  }
}

  module.exports = Home;
