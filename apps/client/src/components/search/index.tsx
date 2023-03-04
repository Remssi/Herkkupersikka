import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import makeStyles from '@mui/styles/makeStyles';

interface Props {}

export const Search: React.FC<Props> = () => {
  const classes = useClasses();

  return (
    <TextField
      variant="outlined"
      placeholder="Hae herkkuja"
      className={classes.wrapper}
      InputProps={{
        className: classes.search,
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon className={classes.searchIcon} />
          </InputAdornment>
        ),
      }}
    />
  );
};

const useClasses = makeStyles({
  wrapper: {
    maxWidth: "100%",
    width: "390px",
  },
  search: {
    color: "#F5C6AA",
    height: "40px",
  },
  searchIcon: {
    color: "#F5C6AA",
  },
});
