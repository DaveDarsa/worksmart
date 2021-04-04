import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import Header from "../components/Header";
import MainBody from "../components/Mainbody";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { UserContext } from "../contexts/UserContextProvider";
import { Redirect } from "react-router-dom";
const Home = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [userDetails] = useContext(UserContext);
  var needsRedirect = userDetails.name === "user";

  if (needsRedirect) {
    return <Redirect to="/setup" />;
  }
  return (
    <motion.div
      initial={{ opacity: 0.8, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <Header theme={theme} setTheme={setTheme} />
      <MainBody />
      <Footer />
    </motion.div>
  );
};
export default Home;
