import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { ProductCard } from "../productCard";
import makeStyles from '@mui/styles/makeStyles';
import { testProductDetails } from "../../testData";
import { Product } from "../../../../shared/types";

interface Props {
  collection: string;
  endPoint: string;
}

// * add carousel/slider funtionality later (swipe right to show more cards)
export const CardCollection: React.FC<Props> = ({ collection, endPoint }) => {
  const initState: Product[] = [];
  const [products, setProducts] = useState(initState);

  useEffect(() => {
    // * placeholder, replace with api call
    setProducts(Array.apply(null, Array(8)).map(() => testProductDetails));
  }, []);

  const classes = useClasses();
  return (
    <Box className={classes.collection}>
      <Typography className={classes.collectionText}>{collection}</Typography>
      <Box className={classes.cardRow}>
        {products.map((product, index) => (
          <ProductCard key={index} productDetails={product} />
        ))}
      </Box>
    </Box>
  );
};

const useClasses = makeStyles({
  collection: {
    marginBottom: "40px",
    "&:last-of-type": {
      marginBottom: "0px",
    },
  },
  collectionText: {
    fontSize: "1.4em",
    color: "#84BCDA",
  },
  cardRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
});
