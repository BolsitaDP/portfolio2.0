import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const DelayedLink = ({ delay, replace, state, to, ...props }) => {
  const navigate = useNavigate();
  const timerRef = useRef();

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const clickHandler = (e) => {
    e.preventDefault();
    timerRef.current = setTimeout(navigate, delay, to, { replace, state });
  };

  return <Link to={to} {...props} onClick={clickHandler} />;
};

export default DelayedLink;

// USAGE:
// eslint-disable-next-line no-lone-blocks
{
  /* <DelayedLink delay={3000} to="/test">
  Test
</DelayedLink>
<DelayedLink delay={3000} to="/test" state="foobar">
  Test w/state
</DelayedLink>
<DelayedLink to="/test">Test w/o delay</DelayedLink> */
}
