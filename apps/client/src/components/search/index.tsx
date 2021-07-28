import { InputAdornment, TextField } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

interface Props {}

export const Search: React.FC<Props> = () => {
  const classes = useClasses();

  return (
    <TextField
      variant="outlined"
      placeholder="Hae herkkuja"
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
  search: {
    width: "390px",
    height: "40px",
    color: "#F5C6AA",
  },
  searchIcon: {
    color: "#F5C6AA",
  },
});
