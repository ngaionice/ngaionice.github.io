import React from "react";
import { AppBar } from "../AppBar";
import { Box, Typography } from "@material-ui/core";

const HomeScreen = () => {
  return (
    <div>
      <AppBar title="Home" />
      <Box justifyContent="center" display="flex" flexDirection="column">
        <Box
          mx={20}
          mt={20}
          height={"25vh"}
          alignItems="flex-start"
          justifyContent="center"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h5" display="inline" paragraph="true">
            Hi there! I'm Julian.
          </Typography>
          <Typography variant="body1" display="inline" paragraph="true">
            I'm currently studying Computer Science and Statistics at the
            University of Toronto. I'm interested in designing UIs that place
            equal emphasis on form and function, as well as manipulating data
            and extracting insights from it.
          </Typography>

          <Typography variant="body1" display="inline" paragraph="true">
            In my spare time, I enjoy developing tools that solves problems that
            I run into, such as extracting data from games that I like, or
            signing up for sessions at the gym automatically.
          </Typography>
        </Box>

        <Box
          mx={20}
          height={"25vh"}
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Typography variant="body1" display="inline" paragraph="true">
            Site is a WIP. Check again later!
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default HomeScreen;
