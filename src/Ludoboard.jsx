import { useState} from "react"


export default function Ludoboard(){
    let [moves,setMoves] = useState({blue: 0, red:0, yellow:0, green:0});

    let updateBlue = ()=>{
        // moves.blue+=1;
        setMoves({...moves, blue: moves.blue+1});
        // console.log(moves.blue);
    }
    let updateGreen = ()=>{
        // moves.blue+=1;
        setMoves({...moves, green: moves.green+1});
        // console.log(moves.blue);
    }
    let updateRed = ()=>{
        // moves.blue+=1;
        setMoves({...moves, red: moves.red+1});
        // console.log(moves.blue);
    }
    let updateYellow = ()=>{
        // moves.blue+=1;
        setMoves({...moves, yellow: moves.yellow+1});
        // console.log(moves.blue);
    }


    return(
        <div>
            <p>Game begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue",color:"white"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves= {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves= {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}