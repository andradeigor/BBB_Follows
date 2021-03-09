import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const Title = ({ darkmode, onChange }) => {
  const useStyles = makeStyles((theme) => ({
    headerStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    titleText: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "100px",
      fontWeight: "300",
      fontFamily: "'Poppins', 'sans-serif'",
      color: darkmode ? "rgba(255,255,255, 0.80)" : "rgba(0,0,0, 0.80)",
      marginRight: "20px",
    },
    tougleThemeWarper: {
      alignItems: "center",
      justifyContent: "center",
    },
    darkThemeButton: {
      borderRadius: "50%",
      marginTop: "50%",
    },
    darkThemeIcon: {
      fontSize: "50px",
      color: darkmode ? "rgba(255,255,255, 0.80)" : "rgba(0,0,0, 0.80)",
    },
  }));
  const classes = useStyles();

  return (
    <header className={classes.headerStyle}>
      <div className={classes.titleText}>BBB Follows</div>
      <div className={classes.tougleThemeWarper}>
        <Button className={classes.darkThemeButton} onClick={onChange}>
          {darkmode ? (
            <Brightness7Icon className={classes.darkThemeIcon} />
          ) : (
            <Brightness4Icon className={classes.darkThemeIcon} />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Title;
