import { Box, Stack } from "@mui/material";
import SigninBanner from "./renders/SigninBanner";
import SigninForm from "./renders/SigninForm";

const SigninPage = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      direction="row"
    >
      <Box
        m={2}
        flexGrow={1}
        maxWidth="500px"
        border={1}
        borderColor="rgb(231, 235, 240)"
        borderRadius={1}
      >
        {/* <LinearProgress /> */}
        {/* Banner */}
        <Box mb={1.5} p={2}>
          <SigninBanner />
        </Box>
        {/* End of banner */}

        {/* Form Goes here */}
        <Box mb={1} px={2} pb={2}>
          <SigninForm />
        </Box>
      </Box>
    </Stack>
  );
};

export default SigninPage;
