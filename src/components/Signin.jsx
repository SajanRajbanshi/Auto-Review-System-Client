import { Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handlePasswordChangef(event) {
    setPassword(event.target.value);
  }
  function handleSignin() {
    setIsLoading(true);
    axios
      .post("http://localhost:3000/auth/signin", {
        username: name,
        password: password,
      })
      .then((response) => {
        if (response.data.status) {
          localStorage.setItem("userId", "name");
          setIsLoading(false);
          navigate("/home");
        } else {
          console.log("sign in failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        boxSizing={"border-box"}
        gap={2}
        width={"500px"}
      >
        <Typography variant="h4">Sign in</Typography>
        <TextField
          value={name}
          onChange={handleNameChange}
          label={"Name"}
          fullWidth
        />
        <TextField
          value={password}
          onChange={handlePasswordChangef}
          label={"Password"}
          fullWidth
        />
        <LoadingButton
          loading={isLoading}
          sx={{ backgroundColor: "lightgreen" }}
          onClick={handleSignin}
        >
          Sign in
        </LoadingButton>
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <Typography>Don't have an account?</Typography>
          <Link to={"/signup"}>Sign up</Link>
        </Stack>
      </Stack>
    </>
  );
}
