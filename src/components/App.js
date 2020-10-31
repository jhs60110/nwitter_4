import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
  authService.onAuthStateChanged((user) => {
  if(user){
         setIsLoggedIn(true);      
  }else{   //여기서 유저의 변화를 감시하고 있는거야
         setIsLoggedIn(false);
  } setInit(true);
});
  }, [])
  return (
  <>
  {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "initializaing..."}
  <footer>&copy; {new Date().getFullYear()} nwitter</footer>
  </>
    );
}

export default App;
