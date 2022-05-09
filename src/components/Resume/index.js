import React from "react";
import resume from '../../assets/resume/epresume.pdf'

function Resume() {
    return (
        <section className="my-5">
        <br></br>
            <div className="resume">
                <h1>Download my complete resume here!</h1>
                <a href={resume} target='_blank'>Download Resume</a>
            </div>
        <br></br>
        <div id='resume' nameClass="credentials">
        <div nameClass="credentials-text">
          <h1>Profile:</h1>
          <p>Manufacturing engineering and applied mathematics double major graduate from Texas State University. Starting out in research
            working to find creative inventions and collaborations that could be applied towards renewable
            energy technologies. Transferred into automation, controls design, security and PLC programming.
            Seeking to apply project management, programming knowledge, and experience. 
          </p>
          <br></br>

          <h1>Education:</h1>  
            <h5>Texas State University – San Marcos, TX. Graduation December 2013</h5>
            
              <li>{'\u2022'}B.S. Manufacturing Engineering</li> 
              <li>{'\u2022'}B.S. Applied Mathematics</li>
            
          <br></br>    
          <h1>Patents:</h1> 
            <ul>
              <li>{'\u2022'}System and Method for Producing a Nano Metal Mesh using a Brittle Film Template for Lithography </li>
              <li>{'\u2022'}Method to Produce a Nanogap for Genetic Sequencing.</li>
            </ul>
          <br></br>

          <h1>Character qualities:</h1> 
            <h4>
            Dependable, team player, high initiative, creative, self-starter, finishes what's started, fast learner, thoughtful, honest, and hardworking   
            </h4>
          <br></br>

          <h1>Current Employment:</h1>
            <h4>Gibraltar US, Director of control systems and programming 05/2022- present</h4>  
            <ul>
              <li>{'\u2022'}Responsible for all PLC programming and controls</li>
            </ul>  
            <br></br>

        </div>
    </div>
    
      </section>

    );
  }
  
  export default Resume;