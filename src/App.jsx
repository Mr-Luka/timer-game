
import './index.css'
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {


  return (
    <>
      <Player />
      <div className='challenges'>
        <TimerChallenge />
      </div>
    </>
  )
}

export default App
