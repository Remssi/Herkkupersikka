import { useState } from "react";
import { Box, Button, Drawer, IconButton, TextField } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";

interface Props {}

// ? make the login button clickable with drawer open, or make new button which belongs to drawer?
// ! opening categories will move login button sligthly, because absolute position
// TODO: state & validation for login
export const Login: React.FC<Props> = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.root}>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        BackdropProps={{ invisible: true }}
      >
        <IconButton
          className={classes.closeButton}
          aria-label="close-drawer"
          size="small"
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </IconButton>

        <Box className={classes.content}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Käyttäjätunnus"
            InputProps={{
              className: classes.text,
            }}
          />

          <TextField
            size="small"
            variant="outlined"
            placeholder="Salasana"
            InputProps={{
              className: classes.text,
            }}
          />
        </Box>
      </Drawer>
      <Button
        className={`${classes.loginButton} ${
          open ? classes.loginButtonShift : classes.loginButtonInit
        }`}
        startIcon={<PersonIcon />}
        onClick={() => setOpen(true)}
      >
        kirjaudu
      </Button>
    </Box>
  );
};

// ! fix login button, it is deattached when closing the drawer
// ! the button also moves slighty left when opening/closing, since drawer removes scroller from the page
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      zIndex: 101,
      position: "fixed",
      marginLeft: "50%",
    },
    loginButton: {
      color: "white",
      backgroundColor: "#84BCDA",
      borderRadius: "0px 0px 10px 10px",
      marginLeft: "-50%",
      "&:hover": {
        backgroundColor: "#52a1cb",
      },
    },
    loginButtonInit: {
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    loginButtonShift: {
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginTop: "150px",
    },
    drawerPaper: {
      margin: "auto",
      width: "320px",
      maxWidth: "100%",
      height: "150px",
      backgroundColor: "#84BCDA",
      border: "none",
      borderRadius: "0px 0px 10px 10px",
      boxShadow: "none",
      display: "block",
      overflow: "auto",
    },
    closeButton: {
      display: "block",
      margin: "auto 5px auto auto",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      margin: "10px",
      maxWidth: "100%",
      gap: "10px",
    },
    text: {
      width: "100%",
      color: "#F5C6AA",
      backgroundColor: "white",
    },
  })
);
