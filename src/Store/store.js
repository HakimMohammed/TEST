import { legacy_createStore as createStore } from "redux";


// State
const initialState =
{
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true,
};

// actions Creators

export const Pause = ()=>({ type:"pause"});
export const Restart = ()=>({ type:"restart"});
export const Score = (player)=>({ type:"score" , payload: { player:player}});

// Reducer

function reducer(state=initialState , action)
{
    if(action.type === "restart")
    {
        return initialState;
    }
    if(action.type === "pause")
    {
        if(state.winner)
        {
            return state;
        }
        return{...state, playing: !state.playing}
    }
    if(action.type === "score")
    {
        const player = action.payload.player;
        const otherPlayer = player === "player1" ? "player2" : "player1" ;

        if( state.winner)
        {
            return state;
        }
        if(state.playing === false)
        {
            return state;
        }

        const currentPlayerScore = state[player];

        if(currentPlayerScore <= 15)
        {
            return{...state,[player]:currentPlayerScore + 15};
        }
        if(currentPlayerScore === 30)
        {
            return {...state, [player]: 40};
        }
        if(currentPlayerScore === 40)
        {
            if(state[otherPlayer] !== 40)
            {
                return{ ...state, winner:player};
            }
            if(state.advantage === player)
            {
                return{...state, winner:player};
            }
            if(state.advantage === null)
            {
                return{...state, advantage: player};
            }
            return { ...state , advantage:null};
        }
    }
    return state;
}

// Store

export default createStore(reducer);