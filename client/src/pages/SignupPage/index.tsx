import { Box, Stack } from "@mui/material";
import SignupBanner from "./renders/SIgnupBanner";
import SignupForm from "./renders/SignupForm";

const SignupPage = () => {
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
        <Box p={2}>
          <SignupBanner />
        </Box>
        {/* End of banner */}

        {/* Form Goes here */}
        <Box mb={1} px={2} pb={2}>
          <SignupForm />
        </Box>
      </Box>
    </Stack>
  );
};

export default SignupPage;
