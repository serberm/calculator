import React from "react";
import PointTarget from "react-point";

const CalculatorKey = (props) => {
  const { onPress, className, ...props1 } = props;

  return (
    <PointTarget onPoint={onPress}>
      <button className={`calculator-key ${className}`} {...props1} />
    </PointTarget>
  );
};

export default CalculatorKey;
