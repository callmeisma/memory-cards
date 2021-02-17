import React from 'react';

const HeaderScore = (props) => {
    return (
        <header>
            <h1>Memory Game</h1>
            <div>
                <h2>Score: {props.score}</h2>
                <h2>High Score: {props.highScore}</h2>
            </div>
        </header>
    )
}

export default HeaderScore
