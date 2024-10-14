import { Stack } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [range, setRange] = useState([0, 10]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/data/daily")
      .then((response) => {
        if (response.data) {
          setIsLoading(false);
          setData(response.data);
        } else {
          console.log("error occured while fetching daily data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setDailyData(data.slice(range[0], range[1]));
  }, [range, data]);

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      <Stack
        direction={"column"}
        width={"100%"}
        height={"100%"}
        padding={5}
        boxSizing={"border-box"}
        gap={1}
      >
        <Stack>
          <ResponsiveContainer width={"100%"} height={500}>
            <LineChart data={dailyData}>
              <Line type="monotone" dataKey="positive" stroke="green" />
              <Line type="monotone" dataKey="negative" stroke="red" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Stack>
      </Stack>
    </>
  );
}
