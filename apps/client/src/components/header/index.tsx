import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {}

export const Header: React.FC<Props> = () => {
  const classes = useClasses();
  return (
    <Box component="header" className={classes.header}>
      <div></div>
    </Box>
  );
};

const useClasses = makeStyles({
  header: {
    zIndex: 100,
    position: "sticky",
    top: 0,
    width: "100%",
    // variables in :root, App.css file
    height: "var(--header-height)",
    backgroundColor: "white",
    boxShadow: "0 3px 7px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px",
  },
});
