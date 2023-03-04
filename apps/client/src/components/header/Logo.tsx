import { Box, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

interface Props {}

// TODO: make logo as img,
export const Logo: React.FC<Props> = () => {
  const classes = useClasses();
  return (
    <Box className={classes.logo}>
      <Typography className={classes.logoText}>Herkkupersikka</Typography>
    </Box>
  );
};

const useClasses = makeStyles({
  logo: {
    width: "200px",
    height: "40px",
    borderRadius: "6px",
    backgroundColor: "#F5C6AA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: "1.5em",
    color: "white",
  },
});
