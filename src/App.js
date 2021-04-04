import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import Loader from "./Loader";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AnimatePresence, motion } from "framer-motion";
import { SavedDetailsProvider } from "./contexts/SavedDetailsProvider";
import UserContextProvider from "./contexts/UserContextProvider";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <div className="App">
          <GlobalStyle />
          <AnimatePresence exitBeforeEnter>
            {loading && <Loader setLoading={setLoading} />}
          </AnimatePresence>
          {!loading && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0.8, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.5 }}
              >
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.key}>
                    <Route exact path="/">
                      <SavedDetailsProvider>
                        <Nav />
                        <Home />
                      </SavedDetailsProvider>
                    </Route>
                    <Route path="/setup">
                      <Setup />
                    </Route>
                    <Route path="*">
                      <NotFound />
                    </Route>
                  </Switch>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
