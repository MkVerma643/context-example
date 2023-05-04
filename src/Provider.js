import React, { useState } from "react";
import PackageContext from "./Context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: "Fly to US",
    agent: "643",
    accept: "Not Accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "Accepted" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
