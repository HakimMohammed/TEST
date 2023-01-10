import { useDispatch , useSelector} from "react-redux";
import { Pause } from "../Store/store_immer";

export function PlayPauseButton() {
    const dispatch = useDispatch();
    return (
        <button
            className="button"
            onClick={() => { dispatch(Pause()); }}
            // onClick={() => { dispatch(setPlaying(false)); }}
        > Pause / Reprendre
        </button>
    );
}

// export function PlayPauseButton() {
//     return(
//         <button className="button"
//         onClick={()=>{
//             const [ isPlaying , setIsPlaying ] = useSelector((state)=>{state.playing})
//             if( !isPlaying )
//             {
//                 useDispatch(setPlaying(true));
                
//                 window.setTimeout(()=>{
//                     if( isPlaying )
//                     {
//                         const pointWinner = Math.random() > 0.5 ? "player1" : "player2";

//                         useDispatch()
//                     }
//                 })
//             }
//         }}>
//             Pause/Reprendre
//         </button>
//     )
// }