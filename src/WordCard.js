import React, { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1, // เล่นครั้งที่เท่าไหร่
        guess: '', // คลิกไปกี่ครั้งแล้ว
        complete: false // การเล่นจบแล้วหรือยัง
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
                myFunctionAlert()
                window.location.reload(false);

            }
            else {
                console.log('rest, next attempt')
                setState({...state, guess: '' , attempt: state.attempt + 1})
            }
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
            }
        </div>
    );
}


function myFunctionAlert() {
    var x = Math.floor(Math.random() * 4);
    if(x == 0) {
        alert("Congratulations !");
    }
    if(x == 1) {
        alert("This calls for celebrating! Congratulations !");
    }
    if(x == 2) {
        alert("You did it! So proud of you!");
    }
    if(x == 3) {
        alert("Well done !");
    }
}

