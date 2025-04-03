import {useState, useRef} from 'react';

export default function Player (){
    const playersName = useRef();
    const [player, setPlayer] = useState('');

    function handleClick(){
        setPlayer(playersName.current.value);
        playersName.current.value = '';
    }



    return (
         <section id="player">
            <h2>Welcome {player ? player : 'unknown entity'}</h2>
            <p>
                <input 
                    type='text'
                    ref={playersName}
                />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    )
}