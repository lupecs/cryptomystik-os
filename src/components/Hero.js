import React from "react";

import "./Hero.css";
import MagicBall from "../assets/magic-ball-hand.png";
import { Grid } from "@mui/material";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Grid container>
          <Grid item xs={12} md={6} className="hero-left">
            <div className="hero-text">
              <h1>Crypto's Magic Ball</h1>
              <h2>News, Stats & Calculations for Future Gains.</h2>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="center"
            className="hero-right"
          >
            <img src={MagicBall} alt="" />
          </Grid>
        </Grid>

        {/**LEFT */}
        {/* <div className="left">
          <h1>Crypto's Magic Ball</h1>
          <h2>News, Stats & Calculations for Future Gains.</h2>
        </div>

        <div className="right">
          <div className="img-container">
            <img src={MagicBall} alt="Magic Ball" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
