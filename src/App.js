import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import Loader from "./Loader";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { AnimatePresence } from "framer-motion";
import { SavedDetailsProvider } from "./contexts/SavedDetailsProvider";
import Footer from "./components/Footer";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeContextProvider>
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          {loading && <Loader setLoading={setLoading} />}
        </AnimatePresence>
        {!loading && (
          <>
            <Nav />
            <Switch>
              <Route exact path="/">
                <SavedDetailsProvider>
                  <AnimatePresence exitBeforeEnter>
                    <Home />
                  </AnimatePresence>
                </SavedDetailsProvider>
              </Route>
              <Route path="/setup">
                <Setup />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </>
        )}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
