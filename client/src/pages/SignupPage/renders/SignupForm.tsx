import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const SignupForm = () => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleViewPassword = () => {
    setShowPass((prevPass) => !prevPass);
  };

  return (
    <>
      <form>
        <Stack spacing={2.5}>
          <Stack direction="row" spacing={2}>
            <Box>
              <TextField
                id="fname"
                label="First Name"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box>
              <TextField
                id="lname"
                label="Last Name"
                variant="outlined"
                size="small"
              />
            </Box>
          </Stack>

          <Box>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>

          <Box>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>

          <Box>
            <Stack direction="row" spacing={2}>
              <TextField
                type={showPass ? "text" : "password"}
                id="password"
                label="Password"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                type={showPass ? "text" : "password"}
                id="cfmPassword"
                label="Confirm Password"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Stack>

            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Checkbox
                  checked={showPass}
                  onChange={handleViewPassword}
                  name="showPass"
                />
              }
              label={<Typography color="grey.800">Show Password</Typography>}
            />
          </Box>

          <Stack direction="row" justifyContent="space-between">
            <Button variant="text">Log in instead</Button>
            <Button variant="contained">Next</Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default SignupForm;
