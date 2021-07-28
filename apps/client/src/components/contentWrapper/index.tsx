import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {}

// * This wraps all the actual content in the page, does not include header & footer
export const ContentWrapper: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.pageWrapper}>
      <Box className={classes.contentWrapper}>{children}</Box>
    </Box>
  );
};

const useStyles = makeStyles({
  pageWrapper: {
    minHeight: "100vh",
  },
  contentWrapper: {
    margin: "auto",
    maxWidth: "1024px",
    width: "100%",
    backgroundColor: "#F3F3F3",
    borderRadius: "10px",
  },
});
