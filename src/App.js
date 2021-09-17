import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./pages";
import { theme } from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactPage from "./pages/contact.jsx";
import { DataProvider } from "./components/Context/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </ThemeProvider>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
