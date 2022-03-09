import React from 'react';
import styles from  './About.module.css';
import ReactDOM from 'react-dom';

function About(){
    return(
        <div>
        <header class="d-flex align-items-center"> 
        <div id="container">
        <h1> ABOUT US </h1>
        </div>
        </header>  
       
<br></br>
<br></br>
    <div className = {styles.stuff} class="container">
  <div class="row">
    <div class="col-sm">
     <h1> Our Goal </h1> 
     <br></br>
     <p> Our team is made up of young minds who put their skills to the test every day. By creating our own currency, we are working on blockchain technology and expanding our understanding of the crypto world. The crypto world is expanding on a daily basis as our world transitions to the online currency. We do not intend to fall behind, so we are introducing our own cryptocurrency as well as a custom NFT designed by our lead developer, Mohammad Amin, and UX/UI designer, Angel Flores. We are the creators of Game Over and hope to expand our world to our user's liking. We would use React and Solidity to expand and advertise our game into the blockchain network.</p>
<img className={styles.BitCoin} src = "https://cryptologos.cc/logos/bitcoin-btc-logo.png"></img>
    </div>
    <div class="col-sm">
    <h1> The Team </h1>
    <br></br>
    <div class = "col-sm">
    <img src="https://media.discordapp.net/attachments/850626737008410648/947056258479964160/4AFE843A-433B-4960-8B8C-F9B334D15AFA.jpg?width=577&height=1026 "></img>
    <img src= "https://media.discordapp.net/attachments/850626737008410648/947057725014155304/IMG_2238.png?width=577&height=1026"></img>
     </div>
    </div>

  </div>
</div>

<br></br>
<br></br>
</div>

    ); 
} 

export default About;