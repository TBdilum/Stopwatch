import { useEffect,useState,useRef } from "react";

export default function Stopwatch() {
    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning]);

    function start() {

    }
    function stop() {

    }

    function reset() {
        setElapsedTime(0);
    }

    function formatTime() {
        return('00:00:00');
    }

    return(
        <div>
            <div className="watch-container">
                <div className="watch">{formatTime()}</div>
                    <div className="controls">
                        <button className="start-button" onClick={start}>Start</button>
                        <button className="reset-button" onClick={reset}>Reset</button>
                        <button className="stop-button"  onClick={stop}>Stop</button>
                    </div>
            </div>
        </div>
    )
}