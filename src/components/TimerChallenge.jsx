import {useState, useRef} from 'react';

import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({title, targetTime}){
    const modal = useRef();
    const timer = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerActive = targetTime * 1000 > timeRemaining &&  timeRemaining > 0;

    if(timeRemaining <= 0) {
        modal.current.open();
        clearInterval(timer.current)
    }

    function handleStart(){
        timer.current = setInterval(()=> {
           setTimeRemaining(prevTime => prevTime - 10);
        }, 10)
    }
    

    function handleStop(){
        clearInterval(timer.current);
        modal.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000)
    }

   

    return (
        <>
            <ResultModal ref={modal} onReset={handleReset} targetTime={targetTime} timeRemaining={timeRemaining}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={timerActive ? handleStop : handleStart}>{timerActive ? 'Stop' : 'Start'} challenge</button>
                </p>
                <p>{timerActive ? 'Timer is running...' : 'Timer is Inactive.'}</p>
            </section>
        </>
    )
}