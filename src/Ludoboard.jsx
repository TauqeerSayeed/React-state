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
        <div style={{backgroundColor:"white", padding:"0.5rem 6rem 0rem 6rem",borderRadius:"1rem"}}>
            <h2>Lets go!</h2>
            <div className="board">
                <h3>Blue moves = {moves.blue}</h3>
                <button style={{backgroundColor:"blue",color:"white"}} onClick={updateBlue}>+1</button>
                <h3>Yellow moves = {moves.yellow}</h3>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <h3>Green moves= {moves.green}</h3>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <h3>Red moves= {moves.red}</h3>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <br /><br />
                <h4>© Tauqeer-sayeed</h4>
            </div>
        </div>
    )
}