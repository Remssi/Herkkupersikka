import { MenuItem as MuiMenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Category } from "../../../../shared/types";
import { CategoryChip } from "../categoryChip";

interface Props {
  category: Category;
}

export const MenuItem: React.FC<Props> = ({ category }) => {
  const classes = useClasses(category);

  return (
    <MuiMenuItem className={classes.menuItem}>
      <CategoryChip categoryDetails={category} />
    </MuiMenuItem>
  );
};

const useClasses = makeStyles({
  menuItem: (props: Category) => {
    return {
      color: props.textColor,
      backgroundColor: "#FBE6DA",
      "&:hover": {
        backgroundColor: "#F5C6AA",
      },
    };
  },
});
