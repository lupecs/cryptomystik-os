import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

function TopCoins() {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
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
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Today's Top Coins
      </Typography>
      <Grid container spacing={2} mt={2} mb={2}>
        <Grid item xs={12} md={4} justifyContent="center">
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={data[0].image} alt="" className="coin-img" />
              <div>
                <h5>{data[0].name}</h5>
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
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={data[1].image} alt="" className="coin-img" />
              <div>
                <h5>{data[1].name}</h5>
                <p>${data[0].current_price.toLocaleString()}</p>
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
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={data[2].image} alt="" className="coin-img" />
              <div>
                <h5>{data[2].name}</h5>
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
      </Grid>
    </div>
  );
}

export default TopCoins;
