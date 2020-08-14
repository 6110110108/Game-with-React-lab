import React, { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';


var temp = 3; //
var word = ""; //
var reload = 0;
const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        count: 3, //
        guess: '', 
        complete: false 
    }
}

export default function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated`)
        
        let guess = state.guess + c

        console.log(guess)
        setState({...state, guess})

        if(guess.length == state.word.length) {
            if(guess == state.word) {
                console.log('yeah!, the page will be reload')
                setState({...state, completed: true})
                alertWin(props.value)
                window.location.reload(false);
            }
            else {
                console.log('rest, next attempt')
                state.count -= 1;
                setState({...state, guess: '' , attempt: state.attempt + 1})
                alertLose()
            }
        }
        temp = state.count;
        if(temp == 0){
            word = props.value;
        }
        if(reload >= 1) {
            reload = 0;
            window.location.reload(true);
        }
    }
    if(temp == 0){
        reload++;
        return (
            <div>
                    <div id="Result">The word is: {word}</div>
                    {
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                    ) 
                }
            </div>
        );
    }
    else {
        return (
            <div>
                    <div id="Result">You can try : {temp} round.</div>
                    {
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                    ) 
                }
            </div>
        );
    }
    
}


function alertWin(word) {
    var x = Math.floor(Math.random() * 4);
    if(x == 0) {
        alert("Congratulations !" + "\nThe word is: " + word);
    }
    if(x == 1) {
        alert("This calls for celebrating! Congratulations !" + "\nThe word is: " + word);
    }
    if(x == 2) {
        alert("You did it! So proud of you!"+ "\nThe word is: " + word);
    }
    if(x == 3) {
        alert("Well done !"+ "\nThe word is: " + word);
    }
}

function alertLose() {
    var x = Math.floor(Math.random() * 4);
    if(x == 0) {
        alert("You can do it dude :)");
    }
    if(x == 1) {
        alert("Let's try again");
    }
    if(x == 2) {
        alert("keep fighting ");
    }
    if(x == 3) {
        alert("keep going");
    }
}