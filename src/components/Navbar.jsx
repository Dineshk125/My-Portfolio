import React from "react";

import logo from "../assets/DsLogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-shrink-0 items-center">
        <a href="#"><img src={logo} alt="logo" className="mx-2 w-25 h-20 text-neutral-900" /></a>
      </motion.div>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="m-20  flex  gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dinesh-kumawat-2b113b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><FaLinkedin /></a>
        <a href="https://github.com/Dineshk125"><FaGithub /></a>
        <a href="https://www.instagram.com/i_am_d.i.n.e.s.h._/profilecard/?igsh=MW5jaTdwOXlwc3lreA=="><FaInstagram /></a>
        <a href="https://x.com/Dineshk93231797?t=Hcb8DJ8h6f63N9dJ7yeJGg&s=09"><FaXTwitter /></a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
