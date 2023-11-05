import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";

export default function ElementHighlights({data}) {
  const [chartType, setChartType] = React.useState("bar");
  const [withArea, setWithArea] = React.useState(false);
  const [highlighted, setHighlighted] = React.useState("item");
  const [faded, setFaded] = React.useState("global");
  const lineChartsParams = {
    series: [
      { data: data[0],area: false, stack: "total" },
      { data: data[1], area: false, stack: "total" },
    ],
    xAxis: [{ data: [1, 2, 3, 4, 5,6,7] }],
    height: 291,
  };

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
