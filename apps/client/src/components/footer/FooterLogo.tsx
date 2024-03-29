import { Box, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

interface Props {}

export const FooterLogo: React.FC<Props> = () => {
  const classes = useClasses();

  return (
    <Box className={classes.logo}>
      <Typography className={classes.logoText}>Herkkupersikka</Typography>
    </Box>
  );
};

const useClasses = makeStyles({
  // TODO: replace with real logo image
  logo: {
    width: "460px",
    height: "460px",
    borderRadius: "50%",
    backgroundColor: "#F5C6AA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:559px)": {
      width: "220px",
      height: "220px",
    },
  },
  // TODO: color & sizes from theme
  logoText: {
    color: "white",
    fontSize: "3em",
    "@media (max-width:559px)": {
      fontSize: "1.75em",
    },
  },
});
