import { useDispatch } from "react-redux";
import { Score } from "../Store/store";
export function PointScoredButton({ playerId, children }) {
    const dispatch = useDispatch();
    return (
        <button
            className="button"
            onClick={() => { dispatch(Score(playerId)); }}
        > {children}
        </button>
    );
}