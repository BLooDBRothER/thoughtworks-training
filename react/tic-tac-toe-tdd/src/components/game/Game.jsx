/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react'
import Board from '../board/Board';

const WINNING_CONDITION = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

const BOARD_INITIAL_VALUE = Array(9).fill(null)

const Game = () => {

  const [game, setGame] = useState(BOARD_INITIAL_VALUE);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [isDraw, setDraw] = useState(false)
  const [wonCondition, setWonCondition] = useState([]);

  const resetGame = () => {
    setGame(BOARD_INITIAL_VALUE);
    setTurn("X");
    setWinner("")
    setDraw(false);
    setWonCondition([]);
  }

  const checkWining = useCallback(() => {
    if(game.every(value => !value)) return;

    const wonCondition = WINNING_CONDITION.find(condition => game[condition[0]] && game[condition[0]] === game[condition[1]] && game[condition[1]] === game[condition[2]]);
    if (wonCondition) {
      setWinner(turn);
      setWonCondition(wonCondition);
      setTimeout(resetGame, 1000);
      return;
    }
    else if(game.every(value => value)){
      setDraw(true)
      setTimeout(resetGame, 1000);
      return;
    }
    
    setTurn(prev => prev === "X" ? "O" : "X");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game])

  const updateGame = (boardIdx) => {
    if(game[boardIdx] || winner) return;
    setGame(prev => {
      const game = [...prev];
      game[boardIdx] = turn;

      return game;
    })
  }

  useEffect(() => {
    checkWining();
  }, [checkWining])

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex items-center justify-center gap-4 text-xl'>
        <div>Turn-: </div>
        <div className={`px-2 py-1 ${turn === "X" ? 'bg-slate-500' : ''}`}>X</div>
        <div className={`px-2 py-1 ${turn === "O" ? 'bg-slate-500' : ''}`}>O</div>
      </div>
      <Board game={game} updateGame={updateGame} wonCondition={wonCondition} />
      <div className='flex items-center justify-center gap-4 text-xl min-h-[30px]'>
        {winner && <div>{winner} Won the match</div>}
        {isDraw && <div>Match Draw</div>}
      </div>
    </div>
  )
}

export default Game
