import React, { Component } from 'react';
import './App.css';
function handleRedir(url) {
  window.open(url, '_blank');
}
function email() {
  window.location.href = `mailto:joshsantillo@gmail.com`;
}
function facebook() {
  handleRedir('https://facebook.com/jdsantillo/')
}
function linkedin() {
  handleRedir('https://linkedin.com/in/santilloj/')
}
function github() {
  handleRedir('https://github.com/sohuja96/')
}

class App extends Component {

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Joshua Dominic Santillo</h1>
        <div className="social">
          <button onClick={email}>
            <svg class="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
          </button>
          <button onClick={facebook}>
            <svg class="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
          </button>
          <button onClick={github}>
              <svg class="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </button>
            <button onClick={linkedin}>
              <svg class="button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </button>
          </div>
        </header>
        <div className="aboutdiv">
          <div className="about">
            <h1>About</h1>
              <p>I study computation and innovation at Georgia Tech, graduating in August of 2019. I worked as a Software Development Intern at The Home Depot as an undergraduate and will soon be starting work as a Software Engineer at NCR Global. Problems that interest me are challenges that scale.</p>
          </div>
        </div>
        <div className="industry">
          <h2>Industry Work</h2>
          <h3>IT Intern at The Home Depot</h3>
          <ul className="worklist">
            <li>Identified specific surfaces using Tensorflow</li>
            <li>Extended an existing API using Spring Boot</li>
            <li>Worked to improve an Angular2 automation tool</li>
            <li>Developed a Node.js health-monitoring microservice</li>
            <li>Prototyped Angular.js supply-chain improvements</li>
          </ul>
        </div>
        <div className="projectdiv">
          <div className="unused">
            <h1>Projects</h1>
            <h3>Fun, Notable, and on <a href="https://github.com/sohuja96">Github</a></h3>
          </div>
          <div className="project" id="rice">
            <div className="textbox">
            <h3>Eli Rice Seeder</h3>
            <h4>Fall 2018</h4>
            <p>For the second semester of Engineering Social Innovation, I worked on improving a crop planter designed to work in complex environmental conditions. We were able model a new steering and planting system that reduced the amount of manpower required to maintain a consistent agricultural output.</p>
            <h6><a href="https://github.com/sohuja96/gtvip/tree/fall18">View it on Github</a></h6>
            </div>
          </div>
          <div className="project" id="light">
            <div className="textbox">
            <h3>Community Safety Lighting</h3>
            <h4>Spring 2018</h4>
            <p>For my Engineering Social Innovation project, my team collaboratively designed a modular lighting system for the sake of neighborhood visibility and safety at night. Proof-of-concept experiments were conducted to show the block-components of how the product would work on a circuit level.</p>
            <h6><a href="https://github.com/sohuja96/gtvip/tree/spring18">See it on Github</a></h6>
            </div>
          </div>
          <div className="project" id="vis">
            <div className="textbox">
            <h3>Data Visualizations</h3>
            <h4>Spring 2018</h4>
            <p>Used D3.js to create interactive and informative visualizations of different datasets.</p>
            <h6><a href="https://github.com/sohuja96/Data-Visualizations">Inspect it on Github</a></h6>
            </div>
          </div>
          <div className="project" id="oom">
            <div className="textbox">
            <h3>Order-of-Magnitude Classifier</h3>
            <h4>Spring 2018</h4>
            <p>Developed a configurable CLI for learning the order of magnitude of a dataset using the Python machine learning library, Scikit Learn.</p>
            <h6><a href="https://github.com/sohuja96/OoM-Classifier">Glimpse it on Github</a></h6>
            </div>
          </div>
          <div className="project" id="reac">
            <div className="textbox">
            <h3>Image Presenter</h3>
            <h4>Fall 2017</h4>
            <p>Learned about React.js and Webpack to depoloy a simple single-page application to display images.</p>
            <h6><a href="https://github.com/sohuja96/React-Dogs">Examine it on Github</a></h6>
            </div>
          </div>
          <div className="project" id="java">
            <div className="textbox">
            <h3>Algorithm Implementations</h3>
            <h4>Fall 2016</h4>
            <p>Used Java to program different data structures, string search algorithms, and graph algorithms.</p>
            <h6><a href="https://github.com/sohuja96/Java-Algorithms">Observe it on Github</a></h6>
            </div>
          </div>
          <div className="project" id="matlab">
            <div className="textbox">
            <h3>City Animation</h3>
            <h4>Spring 2016</h4>
            <p>Used MATLAB plotting capabilities to render a short animation.</p>
            <h6><a href="https://github.com/sohuja96/MATLAB-City-Animation">Spy it on Github</a></h6>
            </div>
          </div>
        </div>
        <div className="industry">
          <h2>Academic Experience</h2>
          <h3>Ba.S. Computer Science at Georgia Tech</h3>
          <ul className="worklist">
            <li>Concentration in Artificial Intelligence</li>
            <li>Concentration in Human-Computer Interaction</li>
            <li>Made memories</li>
            <li>Class of 2019</li>
          </ul>
        </div>
        <div className="mia">
          <a className="App-link"
            href="https://atlanta.net/"
            target="_blank"
            rel="noopener noreferrer">
            Made in Atlanta
          </a>
      </div>
      </div>
    );
  }
}

export default App;
