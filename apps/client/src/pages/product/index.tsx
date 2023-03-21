import { IconButton, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ContentWrapper, ProductImageScroller } from "../../components";
import { useGetProductQuery } from "../../services/productApi";
import { CategoryChip } from "../../components";
import Box from "@mui/material/Box";
import CartIcon from "@mui/icons-material/AddShoppingCart";

interface Props {}

export const Product: FC<Props> = () => {
  const { productId } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductQuery(productId ?? skipToken);

  const {
    name,
    manufacturer,
    manufacturerId,
    categories,
    description,
    nutrients,
    normalPrice,
    currentPrice,
    stock,
  } = product || {};

  const classes = useClasses({ currentPrice, normalPrice });

  return (
    <ContentWrapper>
      <ProductImageScroller />

      {product === undefined && <Typography>Loading...</Typography>}

      {product && (
        <>
          <Box display={"flex"} justifyContent="space-between">
            <Box>
              <Box className={classes.productInfoContainer}>
                <Typography className={classes.productName} variant="h1">
                  {name}
                </Typography>

                <Link
                  role="manufacturer-link"
                  to={`/manufacturers/${manufacturerId}`}
                  className={classes.link}
                >
                  <Typography className={classes.manufacturerName} variant="h2">
                    {manufacturer?.name}
                  </Typography>
                </Link>

                <Box className={classes.chipContainer}>
                  {categories?.map((category) => {
                    return (
                      <CategoryChip
                        key={category.id}
                        categoryDetails={category}
                        onClick={() => null}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Box>

            <Box className={classes.priceSection}>
              <Box display={"flex"}>
                <Typography className={classes.normalPrice}>
                  {normalPrice}
                </Typography>
                {currentPrice && normalPrice && currentPrice < normalPrice && (
                  <Typography className={classes.currentPrice}>
                    {currentPrice}
                  </Typography>
                )}
              </Box>
              <Typography>Varastossa: {stock}</Typography>
              <IconButton
                title="add-to-cart-button"
                className={classes.cartButton}
                size="large"
                disabled={stock === 0}
              >
                <CartIcon />
              </IconButton>
            </Box>
          </Box>

          <Box className={classes.detailSection}>
            <Box className={classes.descriptionContainer}>
              <Typography>{description}</Typography>
            </Box>
            <Box className={classes.nutrientsContainer}>
              <Typography>Ravintoarvot</Typography>
              <Typography>{nutrients}</Typography>
            </Box>
          </Box>
        </>
      )}
    </ContentWrapper>
  );
};

const useClasses = makeStyles({
  productInfoContainer: {
    padding: "0 0 0 8px",
  },
  productName: {
    fontSize: "2em",
    marginBottom: "0.5em",
  },
  manufacturerName: {
    fontSize: "1.5em",
    textDecoration: "none",
    marginBottom: "0.5em",
  },
  // TODO: color & sizes from theme
  link: {
    textDecoration: "none",
    fontFamily: "sans-serif",
    color: "#5F3A1C",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  chipContainer: {
    display: "flex",
    gap: "0.2em",
    marginBottom: "3em",
  },
  priceSection: {
    textAlign: "right",
    padding: "0 8px 0 0",
  },
  detailSection: {
    marginTop: "4em",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 8px 8px 8px",
  },
  descriptionContainer: {
    maxWidth: "50%",
  },
  nutrientsContainer: {
    alignSelf: "flex-start",
    maxWidth: "15%",
    borderRadius: "10px",
    backgroundColor: "#FBE6DA",
    padding: "8px",
  },
  cartButton: {
    marginTop: "0.5em",
    color: "white",
    backgroundColor: "#84BCDA",
    "&:hover": {
      backgroundColor: "#52a1cb",
    },
  },
  normalPrice: ({
    currentPrice,
    normalPrice,
  }: {
    currentPrice: number | undefined;
    normalPrice: number | undefined;
  }) =>
    currentPrice && normalPrice && currentPrice < normalPrice
      ? {
          fontSize: "1.75rem",
          color: "#5F3A1C",
          textDecoration: "line-through",
        }
      : { fontSize: "1.75rem", color: "#5F3A1C" },
  currentPrice: {
    marginLeft: "0.2em",
    fontSize: "1.75rem",
    color: "#53D61F",
  },
});
