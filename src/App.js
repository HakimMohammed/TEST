import { PlayPauseButton } from "./Components/PlayPauseButton";
import { Display } from "./Components/Display";
import { ResetButton } from "./Components/ResetButton";
import { PointScoredButton } from "./Components/PointScoredButton";
export default function App() {
  return (
    <div>
      <Display />
      <div className="buttons-row">
        <PointScoredButton playerId="player1">
          Point Joueur 1
        </PointScoredButton>
        <PointScoredButton playerId="player2">
          Point Joueur 2
        </PointScoredButton>
      </div>
      <div className="buttons-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  );
}
