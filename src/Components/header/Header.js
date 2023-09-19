import React from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
// import { useNavigate } from "react-router-dom";

function Header({ user, handleLogOut, handleSignInShow, handleShow }) {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   // Perform any logic before navigation if needed
  //   navigate("/messages"); // Replace '/target-route' with your actual target route
  // };

  return (
    <div className="app_header  header_body">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        className="app_headerImage"
      />
      {user ? (
        <div className="icons">
          {/* <div>
            <button type="">
              <HomeIcon onClick />
            </button>

            <button type="" onClick={handleClick}>
              <MessageIcon style={{ fontSize: "medium" }} />
            </button>
          </div> */}

          <Button
            variant="primary"
            onClick={handleLogOut}
            className="custom-button"
          >
            Log Out
          </Button>
        </div>
      ) : (
        <div className="app_logon Container">
          <Button
            variant="primary"
            onClick={handleSignInShow}
            className="custom-button"
          >
            SIGN IN
          </Button>
          <span className="spacer"></span>
          <Button
            variant="primary"
            onClick={handleShow}
            className="custom-button"
          >
            SIGN UP
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;
