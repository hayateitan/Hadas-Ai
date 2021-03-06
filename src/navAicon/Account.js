import { React, useState, useRef } from "react";
import { Overlay, Popover } from "react-bootstrap";
import { StickyBallLoading } from "react-loadingg";
import shimoneicon from "../assets/shimone.jpg";
import Avatar from "@mui/material/Avatar";

const Account = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Avatar alt="Remy Sharp" src={shimoneicon} onClick={handleClick} />

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3"> Coming soon</Popover.Header>
          <Popover.Body>
            <div id="containeranimation2">
              <StickyBallLoading id="AWIP" />
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default Account;
