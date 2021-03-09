import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/index";
import axios from "axios";

const CardDisplay = ({ darkmode }) => {
  const [profilesData, setProfilesData] = useState([]);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      paddingLeft: "80px",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:5000/follows").then((res) => {
        setProfilesData(res.data);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className={classes.root}>
        {profilesData.map((profile) => (
          <Card
            profile={profile}
            darkmode={darkmode}
            key={profile.profileName}
          />
        ))}
      </div>
    </main>
  );
};

export default CardDisplay;
