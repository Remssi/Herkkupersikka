import { ChipField } from "react-admin";

interface Props {
  source: string;
  record: {
    color: string;
  };
}

const ColoredChipField = ({ source, record }: Props) => {
  return <ChipField source={source} sx={{ backgroundColor: record.color }} />;
};

export default ColoredChipField;
