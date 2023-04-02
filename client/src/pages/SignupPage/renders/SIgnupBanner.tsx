import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const SignupBanner = () => {
  return (
    <>
      <Box mb={1.5}>
        <Typography
          variant="h6"
          noWrap
          component={RouterLink}
          to="/"
          fontSize={{ xs: "24px", sm: "26px" }}
          sx={{
            mr: 2,
            fontFamily: "monospace",
            color: "primary.main",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          DeveloperJobs
        </Typography>
      </Box>

      <Typography variant="body1" fontSize="24px" mb={1}>
        Create your Devjobs account
      </Typography>
    </>
  );
};

export default SignupBanner;
