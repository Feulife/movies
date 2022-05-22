import { useEffect, useContext } from "react";
import { MainContext } from "../context";

function Alert() {
  const { alertName: name = "", closeAlert = Function.prototype } =
    useContext(MainContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast deep-purple lighten-1">{name} add to favorite</div>
    </div>
  );
}

export { Alert };
