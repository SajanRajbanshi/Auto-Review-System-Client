import { Stack, Typography,TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [email,setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handlePasswordChangef(event) {
    setPassword(event.target.value);
  }
  function handleEmailChange(event)
  {
    setEmail(event.target.value);
  }
  function handleSignup()
  {
    axios
      .post("http://localhost:3000/auth/signup", {
        email:email,
        username: name,
        password: password,
      })
      .then((response) => {
        if (response.data.status) {
          localStorage.setItem("userId", "name");
          setIsLoading(false);
          navigate("/home");
        } else {
          console.log("sign up failed");
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
        <Typography variant="h4">Sign up</Typography>
        <TextField value={email} onChange={handleEmailChange} label={"Email"} fullWidth/>
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
          onClick={handleSignup}
        >
          Sign up
        </LoadingButton>
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <Typography>Already have an account?</Typography>
          <Link to={"/"}>Sign in</Link>
        </Stack>
      </Stack>
    </>
  );
}
