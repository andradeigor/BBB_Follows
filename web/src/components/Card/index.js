import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CountUp from "react-countup";
import Button from "@material-ui/core/Button";

const Card = ({ profile, darkmode }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      width: "200px",
      margin: "0px 70px 70px 0px",
      borderRadius: "15px",
      height: "300px",
      backgroundColor: darkmode ? "#292929" : "#FAFAFA",
      "&:hover": {
        cursor: "pointer",
      },
    },

    profileImageStyle: {
      width: "100%",
      borderRadius: "15px 15px 0px 0px",
    },
    textWarp: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100px",
    },
    followText: {
      marginTop: "5px",
      fontFamily: "'Poppins', 'sans-serif'",
      textAlign: "center",
      fontSize: "22px",
      color: darkmode ? "rgba(255,255,255, 0.85)" : "rgba(0,0,0, 0.80)",
    },
    followNumber: {
      fontFamily: "'Poppins', 'sans-serif'",
      textAlign: "center",
      color: darkmode ? "rgba(255,255,255, 0.85)" : "rgba(0,0,0, 0.80)",
      fontSize: "20px",
    },
  }));
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Paper
        className={classes.paper}
        elevation={8}
        onClick={() => setIsOpen(!isOpen)}
        key={profile.profileName}
      >
        <div>
          <img
            className={classes.profileImageStyle}
            alt="profile"
            src={profile.profileImage}
          />
        </div>
        <div className={classes.textWarp}>
          <div className={classes.followText}>Seguidores:</div>
          <div className={classes.followNumber}>
            <CountUp
              end={Number(profile.profileFollows)}
              separator="."
            ></CountUp>
          </div>
        </div>
      </Paper>
      <Dialog open={isOpen}>
        <DialogTitle>
          @Fiuk
          <Button onClick={handleOnClose}>X</Button>
        </DialogTitle>
        Hi guys
      </Dialog>
    </>
  );
};

export default Card;
