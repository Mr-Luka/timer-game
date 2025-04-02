import {useState, useRef} from 'react';

export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const [timeRemaning, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

    function handleStart(){
        timer.current = setInterval(()=> {
            setTimeRemaining(prevTime=> prevTime - 10);
        }, 10)
    }

    function handleStop(){
        clearInterval(timer.current)
    }

    return (
        <>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} challenge</button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? 'Time is running...' : 'Timer is Inactive.'}</p>
            </section>
        </>
    )
}