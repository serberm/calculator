import React from "react";
import PointTarget from "react-point";

const CalculatorKey = (props) => {
  const { onPress, className, ...rest } = props;

  return (
    <PointTarget onPoint={onPress}>
      <button className={`calculator-key ${className}`} {...rest} />
    </PointTarget>
  );
};

export default CalculatorKey;
