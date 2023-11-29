import { useContext } from "react";
import "./ViewQueue.css";
import { AppContext } from "../../AppContext";
import AddRemoveButton from "../AddRemoveButton/AddRemoveButton";

const QueueCounter = () => {
  const { timerQueue } = useContext(AppContext);

  return (
    <div className="queue-counter-container">
      <span className=" text-p queue-counter-no">{timerQueue.length}</span>
    </div>
  );
};

const CheveronIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_51_1014)">
        <path
          d="M18.3847 9.11529L12.8847 14.8845L7.38467 9.11529"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_1014">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ViewQueue = ({ onClick, children }) => {
  const { timerQueue, setTimerQueue, currentTimer } = useContext(AppContext);

  return (
    <div>
      <div className="view-queue-btn" onClick={onClick}>
        <div className="view-queue-text">
          <p className="text-p">View Workout Queue</p>
          <div>
            <QueueCounter />
          </div>
        </div>
        <div>
          <CheveronIcon />
        </div>
      </div>

      <div className="view-workout-queue-list">
        {timerQueue.map((timer, clickIndex) => {
          return (
            <AddRemoveButton
              key={clickIndex}
              type="remove"
              text={
                clickIndex === currentTimer
                  ? `>> ${timer.timerType}`
                  : timer.timerType
              }
              onClick={() => {
                setTimerQueue((v) =>
                  v.filter((vv, queueIndex) => clickIndex !== queueIndex),
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ViewQueue;
