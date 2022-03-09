import React from 'react';
import styles from './Contact.module.css'

function Contact(){
    return(
        <div>
        <header class="d-flex align-items-center"> 
        <div id="container">
        <h1> OUR ROADMAP  </h1> 

        </div>
        </header>     
        <br></br> <br></br>
        <div class="container">                      
    <div className = {styles.success} class="row text-center justify-content-center mb-5">
        <div class="col-xl-6 col-lg-8">
            <h2 class="">Steps Toward the Future</h2>
            <p >We’re very proud of the path we’ve taken. Explore the the steps that will define our success</p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
                    <div className = {styles.smt}>
                        <div class="inner-circle"></div>
                        <p className={styles.balls} >Phase 1</p>
                        <p className={styles.paragraphs}>We first want to begin to focus on the development of the game and get it approved by both the company and our users. We want a game that is both intriguing and constantly played so as the first part of step 1 we will focus all attention on development, user feedback, and experiment with marketing. </p>
                        <img className = {styles.imgchat} src = "https://i.ibb.co/BLxJkqY/cahtb.png"></img>
                    <br></br>
                    </div>
                    
                </div>
                <div class="timeline-step">
                    <div class="timeline-content">
                        <div class="inner-circle"></div>
                        <p className={styles.balls} >Phase 2</p>
                        <p className={styles.paragraphs}>Our next step is expanding the game's features and expanding the story of our game. What makes a good game is constant updates and new features to a game, and so we decided to focus on adding more levels, strategy-based levels, more characters, different endings, and a game-based game where your decisions change the story of the game. The main point of this is to make a game that is both entertaining and addictive because of the numerous decisions needed to be made. 
</p>
                    </div>
                    <br></br>
                </div>
                <div class="timeline-step">
                    <div className = {styles.smt}>
                        <div class="inner-circle"></div>
                        <p className={styles.balls} >Phase 3</p>
                        <p className={styles.paragraphs}>Phase 3 of our game is monetizing our game where our users can begin buying our 
                        token to purchase in-game materials or tools that will benefit in-game when trying to stay alive.
                         We plan on not referring to ads rather focusing on an ad-free game that has in-game purchases that 
                         should cover the profit made from ads. With the implementation of our wager/gambling system, users will be able to 
                         wager an amount of tokens with a possibility of multiplying their earnings. Instead of earning coins through chance,
                         users will gain coins through skill to give them a higher probabilty of earning more coins.
</p>
                    </div>
                    <br></br>
                </div>
                <div class="timeline-step">
                    <div className = {styles.smt}>
                        <div class="inner-circle"></div>
                        <p className={styles.balls}>Phase 4</p>
                        <p className={styles.paragraphs}>Phase 4 of our plan is adding this game on all platforms and converting it from 2d to 3d animation creating realistic block-type animation that follows that same classic feel and transitions into the metaverse. We want to also expand our NFT collection creating a system awarding custom NFTs for those who reach high levels and have the ability to make a profit from them. 
</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>

<br></br> <br></br> <br></br>

        </div>

















    );
}

export default Contact;
