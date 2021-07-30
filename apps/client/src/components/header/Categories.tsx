import { useState, useEffect } from "react";
import { Typography, Button, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Category } from "../../../../shared/types";
import { MenuItem } from "./MenuItem";

interface Props {}

export const Categories: React.FC<Props> = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const classes = useClasses();

  useEffect(() => {
    setCategories([
      {
        name: "Pizzat",
        color: "#F5C6AA",
        textColor: "#5f3a1c",
        description: "maukkaita pizzoja",
      },
      {
        name: "Sushit",
        color: "#84BCDA",
        textColor: "#5f3a1c",
        description: "maukkaita pizzoja",
      },
      {
        name: "Kebabit",
        color: "#F7FB89",
        textColor: "#5f3a1c",
        description: "maukkaita pizzoja",
      },
    ]);
  }, []);

  return (
    <>
      <Button
        className={classes.categories}
        aria-controls="category-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Typography className={classes.categoryText}>Kategoriat</Typography>
      </Button>
      <Menu
        classes={{ paper: classes.ul }}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={handleClose}
      >
        {categories.map((category: Category) => (
          <MenuItem key={category.name} category={category} />
        ))}
      </Menu>
    </>
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
    "&:hover": {
      backgroundColor: "#FBE6DA",
    },
  },
  categoryText: {
    fontSize: "1.5em",
    color: "white",
  },
  ul: {
    minWidth: "50px",
    borderRadius: "6px",
    backgroundColor: "#FBE6DA",
  },
});
