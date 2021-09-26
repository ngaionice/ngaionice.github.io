import {
  Chip,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import * as data from "../data/things.json";
import { styles } from "../Theme";

const ListEntry = ({ entry, divider }) => {
  const sv = styles;
  const { name, note, url, tags } = entry;
  return (
    <>
      <ListItem>
        <ListItemButton component={Link} href={url}>
          <ListItemText primary={name} secondary={note} />
          <Stack direction="row" spacing={1} sx={sv.appsChipStack}>
            {tags.map((label) => (
              <Chip label={label} key={label} small />
            ))}
          </Stack>
        </ListItemButton>
      </ListItem>
      {divider ? <Divider /> : null}
    </>
  );
};

const AppsScreen = () => {
  const sv = styles;
  const lastIndex = data.default.length - 1;

  return (
    <>
      <Toolbar />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowSpacing={3}
        sx={sv.appsGrid}
      >
        <Grid item xs={12} xl={9}>
          <Typography variant="body1">
            This is a brief list of things that I've made; hopefully it will get
            longer over time.
          </Typography>
        </Grid>

        <Grid item xs={12} xl={9}>
          <Divider />
        </Grid>

        <Grid item xs={12} xl={9}>
          <List>
            {data.default.map((entry, index) => {
              return (
                <ListEntry
                  key={entry.url}
                  entry={entry}
                  divider={index !== lastIndex}
                />
              );
            })}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export { AppsScreen };
