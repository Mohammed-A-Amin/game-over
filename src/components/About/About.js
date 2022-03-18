import React from "react";
import "./About.css";
import ReactDOM from "react-dom";
import Mohammed from "../../assets/mohammed.png";
import angel from "../../assets/angel.png";

function About() {
  return (
    <div>
      <header class="d-flex align-items-center">
        <div className="title" id="container">
          <h1 className="Maintitle"> ABOUT US </h1>
        </div>
      </header>

      <div class="container">
        <br></br>
        <h1 className="bigblue"> Our Goal</h1>
        <div class="row">
          <div className="gamePara">
            <p>
              Our team is made up of young minds who put their skills to the
              test every day. By creating our own currency, we are working on
              blockchain technology and expanding our understanding of the
              crypto world. The crypto world is expanding on a daily basis as
              our world transitions to the online currency. We do not intend to
              fall behind, so we are introducing our own cryptocurrency as well
              as a custom NFT designed by our lead developer, Mohammed Amin, and
              UX/UI designer, Angel Flores. We are the creators of Game Over and
              hope to expand our world to our user's liking.
            </p>
          </div>
          <br></br>
            <br></br>
          <div class="row">
        
            <div class="col">
              <img className="crownA" src={angel}></img> <br></br>
              <h3 className="names">Angel Flores</h3>
            </div>
            <div class="col">
              <img className="crownM" src={Mohammed}></img> <br></br>
              <h3 className="names">Mohammed Amin</h3>
            </div>
          </div>
        </div>
        <div class="align-items-center">
          <hr></hr>
        </div>
        <div class="container">
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
