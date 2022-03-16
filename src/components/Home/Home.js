import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header class="d-flex align-items-center">
        <div className="title" id="container">
          <h1 className="Maintitle"> GAME OVER</h1>
          <Link to="/" className="btn btn-light">
            Play Now
          </Link>
        </div>
      </header>

      <div class="container">
        <br></br>``
        <h1 className="bigblue"> EMBARK ON A NEW JOURNEY</h1>
        <div class="row">
          <div class="col">
            <div className="gamePara">
              <p>
              The King of Cryptonia has been captured by an enemy king! Will you, as a Knight of Cryptonia, take on the challenge of risking it all and going to go save the king? On your journey, you will collect our cryptocurrency, GG Token on your quest to obtain gems to increase your ranking in Cryptonia as you progress 
              through each world and fight to bring an end to the reign of terror. START YOUR QUEST TODAY!
              </p>
            </div>
          </div>

          <div class="col">
            <img
              className="crown"
              src="https://i.gifer.com/origin/dc/dcd102532110a6fea1e33bcdb5d31f9a_w200.gif"
            ></img>
          </div>
        </div>
        <div class="align-items-center">
          <hr></hr>
        </div>
        <div class="container">
          <br></br>``
          <h1 className="bigblue">Test Your Skills</h1>
          <div class="row">
            <div class="col">
              <div className="gamePara">
                <p>
                GAME OVER uses play-to-earn NFTs and risk or reward cryptocurrency
            to give underrepresented and under-the-radar gamers recognition. Our
            play-to-earn style allows gamers to use their skills to earn
            currency through our marketplace and profit while competing in our
            game by improving their skills and giving every gamer that thrilling
            feeling of accomplishment.
                </p>
              </div>
            </div>

            <div class="col">
              <img
                className="gem"
                src="https://i.ibb.co/JBYF95Q/gem.gif"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
