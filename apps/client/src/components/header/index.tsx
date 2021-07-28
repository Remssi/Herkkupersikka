import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search } from "../";
import { Categories } from "./Categories";
import { Logo } from "./Logo";

interface Props {}

export const Header: React.FC<Props> = () => {
  const classes = useClasses();

  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.buttons}>
        <Logo />
        <Categories />
      </Box>

      <Search />
    </Box>
  );
};

const useClasses = makeStyles({
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
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "50px",
  },
});
