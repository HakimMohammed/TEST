import { legacy_createStore as createStore } from "redux";
import { createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit";


// State
const initialState =
{
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true,
    history: [],
};




// Create Action 

export const Pause = createAction('pause')
export const Restart = createAction('restart')
export const Score = createAction('score' , (player)=>{
     return{
        payload:{player : player}
     }})



// Create reducer

createReducer(initialState , builder => builder
    .addCase(Restart.toString(),()=>{
        return initialState
    })
    .addCase(Pause.toString(), ( draft)=>{
        if (draft.winner) {
            return draft;
        }
        return draft.playing = !draft.playing;
    })
    .addCase("score",( draft , action)=>{
        const player = action.payload.player;
        const otherPlayer = player === "player1" ? "player2" : "player1";

        if (draft.winner) {
            return draft;
        }
        if (draft.playing === false) {
            return draft;
        }

        const currentPlayerScore = draft[player];

        if (currentPlayerScore <= 15) {
            return { ...draft, [player]: currentPlayerScore + 15 };
        }
        if (currentPlayerScore === 30) {
            return { ...draft, [player]: 40 };
        }
        if (currentPlayerScore === 40) {
            if (draft[otherPlayer] !== 40) {
                return { ...draft, winner: player };
            }
            if (draft.advantage === player) {
                return { ...draft, winner: player };
            }
            if (draft.advantage === null) {
                return { ...draft, advantage: player };
            }
            return { ...draft, advantage: null };
        }
    })
    )


// Store

export default createStore(createReducer);




