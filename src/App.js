import { useEffect, useRef, useState, useContext } from "react";
import "./styles.css";
import { AppContext } from "./AppContext";

import Countdown, {
  AddCountdownInput,
} from "./components/Countdown/Countdown.js";
import StopWatch, {
  AddStopwatchInput,
} from "./components/StopWatch/StopWatch.js";
import XY, { AddXYInput, XYWithUserInput } from "./components/XY/XY";
import Tabata, { AddTabataInput } from "./components/TABATA/TABATA";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink as Link,
  useParams,
} from "react-router-dom";
import LinkButton from "./components/LinkButton/LinkButton";
import AddRemoveButton from "./components/AddRemoveButton/AddRemoveButton";
import ViewQueue from "./components/ViewQueue/ViewQueue";
import TimerInfo from "./components/TimerInfo/TimerInfo";

const MainPage = () => {
  const { timerQueue, setCurrentTimer, currentTimer } = useContext(AppContext);

  const handleSpentTimer = () => {
    setCurrentTimer((v) => v + 1);
    // start the current timer
  };

  return (
    <>
      <div className="main-content">
        {timerQueue.length === 0 && (
          <div className="start-workout-desc">
            <h1 className="text-h3"> Let's Get Working! </h1>

            <LinkButton text="Add Timer to Queue" to="/add" />

            <p className="text-h2">💪</p>
          </div>
        )}
        {currentTimer >= timerQueue.length && timerQueue.length > 0 && (
          <div className="workout-complete-message">
            <p className="text-h2">Congratulations!</p>
            <p className="text-h3">Workout Complete</p>
            <LinkButton
              text="Reset Workout"
              onClick={() => {
                setCurrentTimer(0);
              }}
            />
            <p className="text-p">or...</p>
            <p className="text-h1">🎂</p>
            <div className="eat-cake-wrapper">
              <p className="text-p">Eat Cake</p>
              <p className="text-p">😁</p>
            </div>
          </div>
        )}

        {currentTimer < timerQueue.length && (
          <div className="timer-info">
            <TimerInfo />
          </div>
        )}

        <div className="timer-title text-h3">
          {currentTimer < timerQueue.length &&
            timerQueue[currentTimer].timerType}
        </div>

        {timerQueue && (
          <div style={{ textAlign: "center" }}>
            {timerQueue
              .filter((timer, timerIndex) => timerIndex == currentTimer)
              .map((timer, ix) => {
                if (timer.timerType === "Countdown") {
                  return (
                    <Countdown
                      key={Math.random()}
                      {...timer.props}
                      onSpent={handleSpentTimer}
                    />
                  );
                } else if (timer.timerType === "Stopwatch") {
                  return (
                    <StopWatch
                      key={Math.random()}
                      {...timer.props}
                      onSpent={handleSpentTimer}
                    />
                  );
                } else if (timer.timerType === "XY") {
                  return (
                    <XY
                      key={Math.random()}
                      {...timer.props}
                      onSpent={handleSpentTimer}
                    />
                  );
                } else if (timer.timerType === "TABATA") {
                  return (
                    <Tabata
                      key={Math.random()}
                      {...timer.props}
                      onSpent={handleSpentTimer}
                    />
                  );
                }
              })}
          </div>
        )}
      </div>
      <div className="view-queue-container">
        <ViewQueue />
      </div>
    </>
  );
};

const AddTimerPage = () => {
  const { setTimerQueue } = useContext(AppContext);

  const [timerType, setTimerType] = useState("Countdown");

  const showTimer = () => {
    switch (timerType) {
      case "TABATA":
        return <AddTabataInput key={"TABATA"} />;
      case "XY":
        return <AddXYInput key={"XY"} />;
      case "Countdown":
        return <AddCountdownInput key={"Countdown"} />;
      case "Stopwatch":
        return <AddStopwatchInput key={"Stopwatch"} />;
      default:
        return <></>;
    }
  };
  return (
    <div>
      <div className="main-content">
        <div className="add-container">
          <AddRemoveButton
            key={"Countdown"}
            text="Countdown"
            status={timerType === "Countdown" ? "active" : "default"}
            onClick={() => setTimerType("Countdown")}
          />
          <AddRemoveButton
            key={"Stopwatch"}
            text="Stopwatch"
            status={timerType === "Stopwatch" ? "active" : "default"}
            onClick={() => setTimerType("Stopwatch")}
          />
          <AddRemoveButton
            key={"XY"}
            text="XY"
            status={timerType === "XY" ? "active" : "default"}
            onClick={() => setTimerType("XY")}
          />
          <AddRemoveButton
            key={"TABATA"}
            text="TABATA"
            status={timerType === "TABATA" ? "active" : "default"}
            onClick={() => setTimerType("TABATA")}
          />
        </div>

        <div style={{ textAlign: "center" }}>{showTimer()}</div>
      </div>

      <ViewQueue />
    </div>
  );
};

export default function App() {
  const [timerQueue, setTimerQueue] = useState([
    // {
    //   timerType: "XY",
    //   props: {
    //     inputTime: 4,
    //     rounds: 2
    //   }
    // },
    // {
    //   timerType: "TABATA",
    //   props: {
    //     workInterval: 4,
    //     restInterval: 4,
    //     rounds: 2
    //   }
    // },
    // {
    //   timerType: "Countdown",
    //   props: {
    //     inputTime: 3
    //   }
    // },
    // {
    //   timerType: "TABATA",
    //   props: {
    //     workInterval: 4,
    //     restInterval: 4,
    //     rounds: 2
    //   }
    // },
    // {
    //   timerType: "XY",
    //   props: {
    //     inputTime: 4,
    //     rounds: 2
    //   }
    // },
    // {
    //   timerType: "Stopwatch",
    //   props: {
    //     maxTime: 9
    //   }
    // },
    // {
    //   timerType: "Countdown",
    //   props: {
    //     inputTime: 4
    //   }
    // },
    // {
    //   timerType: "TABATA",
    //   props: {
    //     workInterval: 4,
    //     restInterval: 4,
    //     rounds: 2
    //   }
    // }
  ]);
  const [currentTimer, setCurrentTimer] = useState(0);
  return (
    <AppContext.Provider
      value={{
        timerQueue: timerQueue,
        setTimerQueue: setTimerQueue,
        currentTimer: currentTimer,
        setCurrentTimer: setCurrentTimer,
      }}
    >
      <Router>
        <div className="nav-bar">
          <ul className="nav-bar-list text-p">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Timer</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddTimerPage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
