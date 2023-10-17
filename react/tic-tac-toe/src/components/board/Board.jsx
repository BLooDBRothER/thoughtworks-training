/* eslint-disable react/prop-types */
import Square from '../square/Square'

const Board = ({ game, updateGame, wonCondition }) => {
  return (
    <div className='grid grid-cols-3 w-[320px] gap-[10px]'>
        {game.map((squareValue, idx) => (
            <Square key={idx} squareValue={squareValue} squareIdx={idx} updateGame={updateGame.bind(null, idx)} isHighlight={wonCondition.includes(idx)} />
        ))}
    </div>
  )
}

export default Board
