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
          <br></br><br></br>On this page you will find my most advanced full-stack apps. Other pages above, like FRONT-END or DH (for digital humanities), show my earliest development work or my pre-developer work, showcasing the trajectory that led me from no experience to being able to build apps like the ones below in under a year.
          </figcaption>
        </figure>
        <button onClick={scrollToFirst} className="examples">
          SOME EXAMPLES
          <i className="fa fa-2x fa-caret-down"></i>
        </button>

        <Element className="project-snapshot" name="first-project" id="first-project">
          <h1>CollaBoard</h1>
          <h2>MY PART: SCRUM MASTER, REDUX, TEXT EDITOR</h2>
          <img alt="project screenshot" src="./images/CollaBoardinAction.png" />
          <figcaption>Built with Postgres, React, Redux, Express, and Node </figcaption>
          <figcaption>Also uses Socket.io, HTML5 Canvas, WebRTC, Draft.js, and Prism.js </figcaption>
          <p>A live-synched whiteboard and text editor, with peer-to-peer video chat and typed chat. Ideal for remote classrooms, for remote team management, and for technical interviewing.</p>
          <a href="https://collaboard-app.herokuapp.com/">SEE THE APP</a>
          <a href="https://github.com/CollaBoard/CollaBoard">PERUSE THE CODE</a>
        </Element>
        <button onClick={scrollToSecond} className="examples">
          EVEN MORE
          <i className="fa fa-2x fa-caret-down"></i>
        </button>

        <Element className="project-snapshot" name="second-project" id="second-project">
          <h1>Tournament Manager</h1>
          <h2>MY PART: PRODUCT OWNER, FIREBASE</h2>
          <img alt="project screenshot" src="./images/TournamentManager.png" />
          <figcaption>Built with Firebase, React, Express, and Node </figcaption>
          <p>A tournament manager for offline tournaments, for effortless brackets and stats management.</p>
          <a href="https://github.com/MKS47GreenfieldAndLegacy/Game-Manager">PERUSE THE CODE</a>
        </Element>
        <button onClick={scrollToThird} className="examples">
          MORE STILL
          <i className="fa fa-2x fa-caret-down"></i>
        </button>

        <Element className="project-snapshot" name="third-project" id="third-project">
          <h1>Intersectional Wage Gap Calculator and Graph Generator</h1>
          <h2>MY PART: PRODUCT OWNER, D3, ANGULAR FRONT-END</h2>
          <img alt="project screenshot" src="./images/WageGapCalculator.png" />
          <figcaption>Built with MongoDB, React, Express, and Node </figcaption>
          <figcaption>Also uses D3, Angular Material</figcaption>
          <p>Generates dynamic graphs regarding wage-gaps between various groups based on user-chosen variables.</p>
          <a href="https://github.com/MKS47GreenfieldAndLegacy/Wage-Gap-Calculator">PERUSE THE CODE</a>
        </Element>

      </div>
    )
  }
}

  module.exports = Home;
