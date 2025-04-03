import {useRef, useImperativeHandle, forwardRef} from 'react';
import {createPortal} from 'react-dom';

const ResultModal = forwardRef( function ResultModal ({targetTime, onReset, timeRemaining}, ref){
    const modal = useRef();

    useImperativeHandle(ref, ()=> {
        return {
            open(){
                modal.current.showModal();
            }
        }
    })
    const userLost = timeRemaining <= 0;
    const secondsLeft = (timeRemaining / 1000).toFixed(2);
    const score = Math.round( timeRemaining / (targetTime * 1000) * 100)

    return createPortal(
        <dialog className='result-modal' ref={modal} onClose={onReset}>
            {userLost ? <h2>You lost!</h2> : <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{secondsLeft} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
});

export default ResultModal;

