import { Box, Button, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const SigninForm = () => {
  const emailRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <Box>
      <form>
        <Stack spacing={2}>
          <Box>
            <TextField
              inputRef={emailRef}
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              id="password"
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </Box>

          <Stack direction="row" justifyContent="space-between" pt={2}>
            <Button variant="text" component={RouterLink} to="/signup">
              Create Account
            </Button>
            <LoadingButton type="submit" loading={false} variant="contained">
              Submit
            </LoadingButton>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default SigninForm;
