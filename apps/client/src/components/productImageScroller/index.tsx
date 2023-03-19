import { FC } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { CardActionArea, CardMedia } from "@mui/material";

// TODO: support multiple images
export const ProductImageScroller: FC = () => {
  const classes = useClasses();
  return (
    <CardActionArea onClick={() => console.log("image clicked")}>
      <CardMedia
        className={classes.productImage}
        component="img"
        height="400px"
        alt="product image"
        title="productImage"
      />
    </CardActionArea>
  );
};

const useClasses = makeStyles({
  productImage: {
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#F5C6AA",
  },
});
