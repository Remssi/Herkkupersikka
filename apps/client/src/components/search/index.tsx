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
    maxWidth: "390px",
    width: "100%",
  },
  search: {
    color: "#F5C6AA",
    height: "40px",
  },
  searchIcon: {
    color: "#F5C6AA",
  },
});
