import React, { createContext, useEffect, useState } from "react";

export let JWTcontext = createContext();
export default function JWTcontextProvider(props) {
  let [JWT, setJWT] = useState();

  useEffect(() => {
    if (localStorage.getItem("userToken"))
      setJWT(localStorage.getItem("userToken"));
    else setJWT(null);
  }, []);

  return (
    <JWTcontext.Provider value={{ JWT, setJWT }}>
      {props.children}{" "}
    </JWTcontext.Provider>
  );
}
