import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Product } from "../../../../shared/types";
import { makeStyles } from "@material-ui/core/styles";
import CartIcon from "@material-ui/icons/AddShoppingCart";
import { CategoryChip } from "../categoryChip";

interface Props {
  productDetails: Product;
}

// TODO: add image prop to CardMedia with the link to picture
export const ProductCard: React.FC<Props> = ({ productDetails }) => {
  const { name, manufacturer, normalPrice, currentPrice, categories } =
    productDetails;

  const classes = useStyles(currentPrice);

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => console.log("area clicked")}>
        <CardMedia
          className={classes.image}
          component="img"
          alt={name}
          height="160"
          title={name}
        />
      </CardActionArea>
      <CardContent>
        <Typography className={classes.productName}>{name}</Typography>
        <Typography className={classes.manufacturer}>
          {manufacturer.name}
        </Typography>
        {categories.map((category) => (
          <CategoryChip key={category.name} categoryDetails={category} />
        ))}
      </CardContent>
      <CardActions disableSpacing={true}>
        <Typography className={classes.normalPrice}>{normalPrice}</Typography>
        <Typography className={classes.currentPrice}>{currentPrice}</Typography>
        <IconButton className={classes.cartButton}>
          <CartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  /*
    ! with too many categories, content exceeds maxHeight and becomes hidden
  */
  card: {
    maxWidth: 243.5,
    maxHeight: 320,
    height: "100%",
  },
  // ** placeholder color until images are stored in the db, could also serve as fallback
  image: {
    backgroundColor: "#F5C6AA",
  },
  productName: {
    color: "#5F3A1C",
  },
  manufacturer: {
    fontSize: "0.8rem",
    color: "#5F3A1C",
  },
  // TODO: check if nicer way to write this
  normalPrice: (currentPrice) =>
    currentPrice
      ? {
          fontSize: "1.2rem",
          color: "#5F3A1C",
          marginRight: "0.5em",
          textDecoration: "line-through",
        }
      : { fontSize: "1.2rem", color: "#5F3A1C", marginRight: "0.5em" },
  currentPrice: {
    fontSize: "1.2rem",
    color: "#53D61F",
  },
  // TODO: check if better way to style this and others with i.e. theme
  cartButton: {
    marginLeft: "auto",
    color: "white",
    backgroundColor: "#84BCDA",
    "&:hover": {
      backgroundColor: "#52a1cb",
    },
  },
});
