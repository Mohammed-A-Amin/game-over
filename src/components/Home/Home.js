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
        <h1 className="bigblue"> What is Game Over?</h1>
        <div class="row">
          <div class="col">
            <div className="gamePara">
              <p>
                GAME OVER is based on a play-to-earn gaming style, where our
                users can put their skills to the test by winning coins,
                reaching higher levels, and winning Unique NFTs that are only
                available to those who are willing to risk it all.
              </p>
            </div>
          </div>

          <div class="col">
            <img
              className="crown"
              src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d23bf5c31d12b8a.png"
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
