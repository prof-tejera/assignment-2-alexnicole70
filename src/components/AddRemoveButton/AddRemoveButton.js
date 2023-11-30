import "./AddRemoveButton.css";

import { Link } from "react-router-dom";

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_29_375)">
        <path
          d="M7 12.1818H17.3636M12.1818 7V17.3636V7Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_29_375">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_65_357)">
        <path
          d="M7.31824 12.1818H17.6819"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_65_357">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const AddRemoveButton = ({
  text,
  to,
  onClick,
  type = "add",
  status = "default"
}) => {
  return (
    <Link
      to={to}
      className={`add-remove-button text-p ${status} ${type}`}
      onClick={onClick}
    >
      <div>{text}</div>
      <div className="button-icon">
        {type === "add" ? <></> : <MinusIcon />}
      </div>
    </Link>
  );
};

export default AddRemoveButton;
