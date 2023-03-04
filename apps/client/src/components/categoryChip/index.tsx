import { Chip } from "@mui/material";
import { Category } from "../../../../shared/types";

interface Props {
  categoryDetails: Category;
  onClick?: () => void;
}

export const CategoryChip: React.FC<Props> = ({ categoryDetails, onClick }) => {
  const { name, color, textColor } = categoryDetails;

  return (
    <Chip
      label={name}
      size="small"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
      onClick={onClick}
    />
  );
};
