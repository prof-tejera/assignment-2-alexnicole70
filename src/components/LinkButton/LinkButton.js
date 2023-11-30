import "./LinkButton.css";

import { Link } from "react-router-dom";

const LinkButton = ({ text, to, onClick }) => {
  return (
    <Link to={to} className="link-button text-p" onClick={onClick}>
      {text}
    </Link>
  );
};

export default LinkButton;
