import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Search } from "../";
// import { Login } from "../login";
import { Categories } from "./Categories";
import { Logo } from "./Logo";

interface Props {}

export const Header: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Login /> */}

      <Box component="header" className={classes.header}>
        <Box className={classes.buttons}>
          <Logo />
          <Categories />
        </Box>

        <Search />
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  header: {
    // variables in :root, App.css file
    height: "var(--header-height)",
    width: "100",
    position: "sticky",
    top: 0,
    zIndex: 100,
    marginBottom: "20px",
    padding: "0 10px",
    backgroundColor: "white",
    boxShadow: "0 3px 7px rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    "@media (max-width:809px)": {
      height: "var(--header-sm-height)",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "initial",
    },
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "50px",
    "@media (max-width:809px)": {
      marginTop: "10px",
      gap: "10px",
      flexWrap: "nowrap",
      flexDirection: "column",
      alignItems: "center",
    },
  },
});
