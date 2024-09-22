import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Header />

    <div className="hero">
      <h1 id="name">Ellie Parry</h1>
      <h2 id="job-title">FRONT-END DEVELOPER</h2>
    </div>

    <div className="toolbox">
      <h2>Toolbox</h2>
      <div className="jellybean-section">
        <p className="jellybeans toolbox-bean">HTML</p>
        <p className="jellybeans toolbox-bean">CSS</p>
        <p className="jellybeans toolbox-bean">JavaScript</p>
        <p className="jellybeans toolbox-bean">TypeScript</p>
        <p className="jellybeans toolbox-bean">React</p>
        <p className="jellybeans toolbox-bean">GitHub</p>
        <p className="jellybeans toolbox-bean">Git</p>
        <p className="jellybeans toolbox-bean">Node.js</p>
        <p className="jellybeans toolbox-bean">SQL</p>
        <p className="jellybeans toolbox-bean">Vite</p>
        <p className="jellybeans toolbox-bean">Next.js</p>
        <p className="jellybeans toolbox-bean">Vitest</p>
        <p className="jellybeans toolbox-bean">Figma</p>
      </div>

    </div>

    <div className="projects" id="project-section">
      <h2>Projects</h2>

      <div className="eateasy">
        <h3>EAT EASY</h3>
        <div className="project-description-container">
          <Link to="/eateasy">
            <img src="src/assets/figma-design.png"/>
          </Link>
          <span>
            <p className="project-description">A website allowing users to search for restaurants and eateries near them that suit their dietary requirements.
              <br></br>Built using React.js.
              <br></br>Designed using Figma. Click on the image to see the project profile.
            </p>
            <div className="jellybean-project-section">
            <p className="jellybeans project-bean">HTML</p>
            <p className="jellybeans project-bean">CSS</p>
            <p className="jellybeans project-bean">JavaScript</p>
            <p className="jellybeans project-bean">React</p>
            <p className="jellybeans project-bean">Git</p>
            <p className="jellybeans project-bean">GitHub</p>
            <p className="jellybeans project-bean">Figma</p>
            <p className="jellybeans project-bean">Node.js</p>
            <p className="jellybeans project-bean">Vite</p>
            </div>
          </span>
        </div>
      </div>

      <div className="fireplace-palace">
        <h3>FIREPLACE PALACE</h3>
        <div className="project-description-container">
          <Link to="#">
            <img src="src/assets/fireplacepalace.png"/>
          </Link>
          <span>
            <p className="project-description">DESCRIPTION HERE.
              <br></br>Built using React.js.
            </p>
            <div className="jellybean-project-section">
                <p className="jellybeans project-bean">HTML</p>
                <p className="jellybeans project-bean">CSS</p>
                <p className="jellybeans project-bean">JavaScript</p>
                <p className="jellybeans project-bean">React</p>
                <p className="jellybeans project-bean">Git</p>
                <p className="jellybeans project-bean">GitHub</p>
                <p className="jellybeans project-bean">Figma</p>
                <p className="jellybeans project-bean">Node.js</p>
                <p className="jellybeans project-bean">Vite</p>
            </div>
          </span>
        </div>
      </div>

      <div className="film-wizard">
        <h3>FILM-WIZARD AI CHATBOT</h3>
        <div className="project-description-container">
          <Link to="#">
            <img src="src/assets/filmwizard.png"/>
          </Link>
          <span>
            <p className="project-description">DESCRIPTION HERE.
              <br></br>Built using React.js.
            </p>
            <div className="jellybean-project-section">
              <p className="jellybeans project-bean">HTML</p>
              <p className="jellybeans project-bean">CSS</p>
              <p className="jellybeans project-bean">JavaScript</p>
              <p className="jellybeans project-bean">React</p>
              <p className="jellybeans project-bean">Git</p>
              <p className="jellybeans project-bean">GitHub</p>
              <p className="jellybeans project-bean">Figma</p>
              <p className="jellybeans project-bean">Node.js</p>
              <p className="jellybeans project-bean">Vite</p>
            </div>
          </span>
        </div>
      </div>

      <div className="weather-finder">
        <h3>WEATHER FINDER</h3>
        <div className="project-description-container">
          <Link to="#">
            <img src="src/assets/weather.png"/>
          </Link>
          <span>
            <p className="project-description">DESCRIPTION HERE.
              <br></br>Built using React.js.
            </p>
            <div className="jellybean-project-section">
              <p className="jellybeans project-bean">HTML</p>
              <p className="jellybeans project-bean">CSS</p>
              <p className="jellybeans project-bean">JavaScript</p>
              <p className="jellybeans project-bean">React</p>
              <p className="jellybeans project-bean">Git</p>
              <p className="jellybeans project-bean">GitHub</p>
              <p className="jellybeans project-bean">Figma</p>
              <p className="jellybeans project-bean">Node.js</p>
              <p className="jellybeans project-bean">Vite</p>
            </div>
          </span>
        </div>
      </div>

    </div>

    <div className="about-me">
      <h2>About Me</h2>
      <div className="ellie-info">
        <p>Hi, I'm Ellie, a lover of puzzles, crafting, and problem-solving.</p>
        <p>Growing up I was always drawing, knitting, or doing
          some kind of arts and crafts. I've had a passion for creativity for as long as I can remember.
        </p>
        <p>During school I excelled at science, so that felt like the obvious career choice. I really enjoyed biology so 
          I went to study Biomedical Sciences with intention of going into cancer research.
        </p>
        <p>However, during my degree I had the nagging feeling that I was leaving behind what made me "me" - my creativity. Eventually, I knew this meant I had to turn my career plans around, which was a very daunting thought but I knew it was the
        right thing to do.
        </p>
        <p>I took the time to think through and research other options that would incorporate this but also push and excite me as much
          as biology has done. It was here I stumbled upon front-end development.
        </p>
        <p><em>~ Enter School of Code ~</em></p>
        <p>About a month before my graduation, I was incredibly lucky to be enrolled onto the School of Code bootcamp - an intensive,
          16-week bootcamp that covers all aspects of full-stack development. During this time I developed both the technical and soft
          skills essential for kick-starting my career as a junior front-end developer.
        </p>
        <p>
        My background in Biomedical Sciences, combined with my experience in web development, provides me with a keen eye for detail,
        strong critical thinking and evaluation skills, and a unique ability to approach complex problems with a scientific perspective.
        </p>
        <p>In short, I get the job done, and I get the job done <b>well</b>.</p>
      </div>
    </div>

    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-details">
        <p>Email: frontend.ellie@gmail.com</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home;