import { Chip } from "@material-ui/core";
import { Category } from "../../../../shared/types";

interface Props {
  categoryDetails: Category;
}

export const CategoryChip: React.FC<Props> = ({ categoryDetails }) => {
  const { name, color, textColor } = categoryDetails;

  return (
    <Chip
      label={name}
      size="small"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
      onClick={() => console.log("clicked")}
    />
  );
};
