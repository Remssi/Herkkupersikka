import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

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
