import { Stack } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
export default function AuthLayout() {
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        width={"100vw"}
        boxSizing={"border-box"}
      >
        <Outlet />
      </Stack>
    </>
  );
}
