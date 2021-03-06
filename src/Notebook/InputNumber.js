import React, { useState } from "react";
import "./inputnumber.css";
import { Form } from "react-bootstrap";

const InputNumber = ({ OnNumberChanged, value }) => {
  const [inputnumber, setInputnumber] = useState();

  const onValueChanged = (e) => {
    setInputnumber(e.target.value);
    OnNumberChanged(e.target.value);
  };

  return (
    <div>
      <Form.Control
        id="inputN"
        type="number"
        defaultValue={value}
        placeholder="Type a number"
        onChange={onValueChanged}
      />
    </div>
  );
};

export default InputNumber;
