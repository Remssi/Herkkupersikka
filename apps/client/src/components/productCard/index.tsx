import {
  Chip,
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

interface Props {
  productDetails: Product;
}

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
          <Chip
            key={category.name}
            label={category.name}
            size="small"
            style={{
              backgroundColor: category.color,
              color: category.textColor,
            }}
            onClick={() => console.log("clicked")}
          />
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
  card: {
    maxWidth: 243.5,
    maxHeight: 320,
    height: "100%",
  },
  // placeholder color
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
  cartButton: {
    marginLeft: "auto",
  },
});
