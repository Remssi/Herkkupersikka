import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ContentWrapper, ProductImageScroller } from "../../components";
import { useGetProductQuery } from "../../services/productApi";
import { CategoryChip } from "../../components";
import Box from "@mui/material/Box";

interface Props {}

export const Product: FC<Props> = () => {
  const { productId } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductQuery(productId ?? skipToken);

  const classes = useClasses();

  const {
    name,
    manufacturer,
    manufacturerId,
    categories,
    description,
    nutrients,
  } = product || {};

  return (
    <ContentWrapper>
      <ProductImageScroller />

      <Box className={classes.productInfoContainer}>
        <Typography className={classes.productName} variant="h1">
          {name}
        </Typography>

        <Link to={`/manufacturers/${manufacturerId}`} className={classes.link}>
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

        <Box className={classes.detailSection}>
          <Box className={classes.descriptionContainer}>
            <Typography>{description}</Typography>
          </Box>
          <Box className={classes.nutrientsContainer}>
            <Typography>Ravintoarvot</Typography>
            <Typography>{nutrients}</Typography>
          </Box>
        </Box>
      </Box>
    </ContentWrapper>
  );
};

const useClasses = makeStyles({
  productInfoContainer: {
    padding: "0 8px 8px 8px",
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
  detailSection: {
    display: "flex",
    justifyContent: "space-between",
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
});
