/* eslint-disable react/prop-types */

const Square = ({ squareValue, updateGame, isHighlight }) => {
  return (
    <div className={`w-full h-[100px] ${isHighlight ? 'bg-white/80 text-black' : 'bg-slate-500'} flex items-center justify-center hover:bg-slate-700 cursor-pointer`} onClick={updateGame}>
      <div className="text-5xl">
        {squareValue}
      </div>
    </div>
  )
}

export default Square
