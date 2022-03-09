import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Minter from './minter';


function Launch(){
    return(
        
        <div> 
           <Navigation/>
            <div>
                <h1> Launch the game!</h1>
                <Minter />
            </div>
        </div>
    );
}

export default Launch;
