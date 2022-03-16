import React from "react";
import "./Roadmap.css";

function Roadmap() {
  return (
    <div>
    <header class="d-flex align-items-center">
      <div classNameName="title" id="container">
        <h1 class="Maintitle"> ROADMAP </h1>
      </div>
    </header>

    <div class="container">
      <br></br>``
      <h1 className="bigblue"> Steps Toward the Future</h1>
      <h2 className = "proud">We’re very proud of the path we’ve taken. Explore the the steps that will define our success</h2>
      <br></br><br></br><br></br>
      <div class="container">
<div class="main-timeline">
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">PHASE</span>
                                    <span className="year">1</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Feedback and Marketing</h5>
                                <p className="description">
                                Focus all attention on furthering development by gaining user feedback and experimenting with different
                                marketing strategies.
                                </p>
                            </div>
                        </div>
                       
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">PHASE</span>
                                    <span className="year">2</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Constant Updates</h5>
                                <p className="description">
                                Implement more challenging levels, strategy-based levels, in-game marketplace, NFT based characters, different endings, switch to a decision based platformer.
                                </p>
                            </div>
                        </div>
                  
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">PHASE</span>
                                    <span className="year">3</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Profitability</h5>
                                <p className="description">
                                  Develop in-game benefits through the implementation of the Risk-Or-Reward system and alter the coins you earn inside
                                  the game into our ERC20 Token called GGCoin (GGC).
                                </p>
                            </div>
                        </div>
                    
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            <span className="month">PHASE</span>
                                    <span className="year">4</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Expansion</h5>
                                <p className="description">
                                   Expand on all platforms and enable multiplayer so users can engage more with their peers in the metaverse, along with expanding
                                   our NFT collections through different achievements in the game.
                                </p>
                            </div>
                        </div>

                    </div>
</div>
    </div>
  </div>
  );
}

export default Roadmap;
