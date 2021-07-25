import "./App.css";
import React, { useEffect } from "react";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/routes";
import { ApolloProvider } from "@apollo/client";
import { CustomHooks } from "./helpers/hooks";
import { useState } from "react";
import { Typography } from "@material-ui/core";
export const MyContext = React.createContext({});
function App() {
  const client = CustomHooks.useCreateOffers();
  const [isLoading, setIsLoading] = useState(true);
  
  const handleSetLoading = (isLoading) => {
    setIsLoading(isLoading);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  },[])

  return (
    <Router>
      <MyContext.Provider value={{handleSetLoading:handleSetLoading}}>
        <ApolloProvider client={client}>
          <div className="App">
              {isLoading? <Typography variant="h6">Get the interest rate</Typography>:<div>
                <HeaderContainer />
                <Routes />
              </div>}
          </div>
        </ApolloProvider>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
