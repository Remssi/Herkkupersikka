import makeStyles from '@mui/styles/makeStyles';
import { Box } from "@mui/material";
import { CardCollection } from "../cardCollection";

interface Props {}

export const CardContainer: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <CardCollection
        collection="Suosituimmat herkut"
        endPoint="/products/popular"
      />
      <CardCollection collection="Pizzat" endPoint="/products/popular" />
    </Box>
  );
};

const useStyles = makeStyles({
  cardContainer: {
    padding: "40px 8px 8px 10px",
  },
});
