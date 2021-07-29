import { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Category } from "../../../../shared/types";

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
        textColor: "white",
        description: "maukkaita pizzoja",
      },
    ]);
  }, []);

  // TODO: styling of menu and items
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
          <MenuItem>
            <ListItemText primary={category.name} />
          </MenuItem>
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
  },
  categoryText: {
    fontSize: "1.5em",
    color: "white",
  },
});
