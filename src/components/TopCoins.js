import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { cryptoAPI } from "../services/cryptoAPI";

function TopCoins() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(cryptoAPI)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className="topCoins">
      <Grid
        container
        mt={2}
        mb={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: "left", fontFamily: "Josefin Sans" }}
          >
            Today's Top Coins
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ width: "200px" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={data[0].image} alt="" className="coin-img" />
              <div>
                <h5>{data[0].name}</h5>
                <p>#{data[0].market_cap_rank}</p>
                <p>${data[0].current_price.toLocaleString()}</p>
              </div>
              {data[0].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ width: "200px" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={data[1].image} alt="" className="coin-img" />
              <div>
                <h5>{data[1].name}</h5>
                <p>#{data[1].market_cap_rank}</p>
                <p>${data[1].current_price.toLocaleString()}</p>
              </div>
              {data[1].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[1].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ width: "200px" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={data[2].image} alt="" className="coin-img" />
              <div>
                <h5>{data[2].name}</h5>
                <p>#{data[2].market_cap_rank}</p>
                <p>${data[2].current_price.toLocaleString()}</p>
              </div>
              {data[2].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[2].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[2].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ width: "200px" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={data[3].image} alt="" className="coin-img" />
              <div>
                <h5>{data[3].name}</h5>
                <p>#{data[3].market_cap_rank}</p>
                <p>${data[3].current_price.toLocaleString()}</p>
              </div>
              {data[2].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[3].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[3].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopCoins;
