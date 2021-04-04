import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import Header from "../components/Header";
import MainBody from "../components/Mainbody";
import { motion } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <motion.div
      initial={{ opacity: 0.8, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <Header theme={theme} setTheme={setTheme} />
      <MainBody />
    </motion.div>
  );
};
export default Home;
