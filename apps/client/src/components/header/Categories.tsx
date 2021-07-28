import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {}

// TODO: make categories as button
export const Categories: React.FC<Props> = () => {
  const classes = useClasses();
  return (
    <Box className={classes.categories}>
      <Typography className={classes.categoryText}>Kategoriat</Typography>
    </Box>
  );
};

const useClasses = makeStyles({
  categories: {
    width: "140px",
    height: "40px",
    borderRadius: "6px",
    backgroundColor: "#F5C6AA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: "1.5em",
    color: "white",
  },
});
