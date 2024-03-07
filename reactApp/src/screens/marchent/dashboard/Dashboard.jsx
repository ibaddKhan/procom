import React from "react";
import { Box, Typography } from "@mui/material";
import PieChart from "../../../components/marchents/PieChart";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Typography variant="h5"> Dashboard </Typography>

        <PieChart />
      </Box>
    </>
  );
};

export default Dashboard;
