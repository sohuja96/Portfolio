import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Joshua Dominic Santillo</h1>
        </header>
        <div className="aboutdiv">
          <div className="about">
            <h1>About</h1>
          </div>
          <div className="about">
            <h1>Georgia Institute of Technology</h1>
            <h3>Bachelor of Science in Computer Science</h3>
          </div>
          <div className="about">
            <h1>GT Grand Challenges</h1>
            <h3>Waste to Sustenance Team</h3>
          </div>

        </div>
        <h2>Industry Work</h2>
        <div className="industry">
          <h3>The Home Depot</h3>
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
        <a className="App-link"
          href="https://atlanta.net/"
          target="_blank"
          rel="noopener noreferrer">
          Made in Atlanta
        </a>
      </div>
    );
  }
}

export default App;
