import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Footer = ({ darkmode }) => {
  const useStyles = makeStyles((theme) => ({
    footerWarper: {
      padding: "0px 0px 40px 0px",
    },
    footerText: {
      textAlign: "center",
      fontSize: "30px",
      fontWeight: "300",
      fontFamily: "'Poppins', 'sans-serif'",
      color: darkmode ? "rgba(255,255,255, 0.80)" : "rgba(0,0,0, 0.80)",
    },
  }));
  const classes = useStyles();
  return (
    <footer className={classes.footerWarper}>
      <div className={classes.footerText}>Made by @AndradeeeIgor</div>
    </footer>
  );
};

export default Footer;
