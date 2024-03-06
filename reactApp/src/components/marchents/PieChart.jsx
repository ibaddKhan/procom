import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card } from "@mui/material";

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ["red", "blue", "green"];

export default function PieColor() {
  return (
    <Stack direction="row" width="100%" spacing={2}>
      <Card sx={{ padding: "20px" }}>
        <Typography variant="h6">Payment Status</Typography>
        <PieChart
          series={[
            {
              data: [
                { value: 20, color: "#4285f4", label: "Completed" },
                { value: 10, color: "#ea4335", label: "Rejected" },
                { value: 15, color: "#fbbc05", label: "Pending" },
              ],
            },
          ]}
          width={500}
          height={250}
        />
      </Card>
    </Stack>
  );
}
