import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";

const lineChartsParams = {
  series: [
    { data: [3, 4, 1, 6, 5], area: false, stack: "total" },
    { data: [4, 3, 1, 5, 8], area: false, stack: "total" },
  ],
  xAxis: [{ data: [1, 3, 5, 7, 9] }],
  height: 291,
};
export default function ElementHighlights() {
  const [chartType, setChartType] = React.useState("bar");
  const [withArea, setWithArea] = React.useState(false);
  const [highlighted, setHighlighted] = React.useState("item");
  const [faded, setFaded] = React.useState("global");

  return (
    <Stack
      direction={{ xs: "column", xl: "row" }}
      spacing={1}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <LineChart
          {...lineChartsParams}
          series={lineChartsParams.series.map((series) => ({
            ...series,
            area: withArea,
            highlightScope: {
              highlighted,
              faded,
            },
          }))}
        />
      </Box>
    </Stack>
  );
}
