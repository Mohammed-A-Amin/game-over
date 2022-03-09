import React from 'react';
import ReactDOM from 'react-dom';
import './Home.module.css'


function Home(){
    return(
        <div>
        <header class="d-flex align-items-center"> 
        <div className ="title" id="container">
        <h1> The Lost Crown  </h1>
        </div>
        </header>      

        <div class = 'container'>
            <br></br>``
        <h1 className="bigblue"> What is Game Over?</h1>
        <div className = "gamePara">
        <p> GAME OVER is based on a play-to-earn gaming style, where our users can put their skills to the test by winning coins, reaching higher levels, and winning Unique NFTs that are only available to those who are willing to risk it all.</p>
        </div>
        <div class = 'align-items-center'><hr></hr></div>
        <h2 className="smallblue"> The Solution For Every Gamer</h2>
        <div className = "gamePara">
        <p> GAME OVER uses play-to-earn NFTs and risk or reward cryptocurrency to give underrepresented and under-the-radar gamers recognition. Our play-to-earn style allows gamers to use their skills to earn currency through our marketplace and profit while competing in our game by improving their skills and giving every gamer that thrilling feeling of accomplishment.</p> 
        </div>
        </div>
        </div>
    );
}

export default Home;
