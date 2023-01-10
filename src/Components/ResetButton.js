import { useDispatch } from "react-redux";
import { Restart } from "../Store/store_immer";
export function ResetButton() {
    const dispatch = useDispatch();
    return (
        <button
            className="button"
            onClick={() => { dispatch(Restart()); }}
        > Remettre à zéro
        </button>
    );
}