import { Box, InputAdornment, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";

interface Props {}

// TODO: move search to its own component, move logo and categories in their own components inside header folder
// TODO: make logo as img, make categories as button
// ? TextField's style InputProps to makeStyles ?
// ! page is pushed over 100vw
export const Header: React.FC<Props> = () => {
  const classes = useClasses();
  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.buttons}>
        <Box className={classes.logo}>
          <Typography className={classes.logoText}>Herkkupersikka</Typography>
        </Box>
        <Box className={classes.categories}>
          <Typography className={classes.categoryText}>Kategoriat</Typography>
        </Box>
      </Box>
      <TextField
        variant="outlined"
        placeholder="Hae herkkuja"
        InputProps={{
          style: {
            width: "390px",
            height: "40px",
            color: "#F5C6AA",
          },
          endAdornment: (
            <InputAdornment position="end">
              <Search style={{ color: "#F5C6AA" }} />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Box>
  );
};

const useClasses = makeStyles({
  header: {
    zIndex: 100,
    position: "sticky",
    top: 0,
    width: "100%",
    // variables in :root, App.css file
    height: "var(--header-height)",
    backgroundColor: "white",
    boxShadow: "0 3px 7px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
  },
  buttons: {
    display: "flex",
  },
  logo: {
    width: "200px",
    height: "40px",
    borderRadius: "6px",
    backgroundColor: "#F5C6AA",
    marginRight: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: "1.5em",
    color: "white",
  },
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
