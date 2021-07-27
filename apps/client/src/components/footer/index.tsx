import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

interface Props {}

export const Footer: React.FC<Props> = () => {
  const classes = useClasses();
  return (
    <Box className={classes.footer}>
      <Box className={classes.logoAndLinks}>
        <Box className={classes.logo}>
          <Typography className={classes.logoText}>Herkkupersikka</Typography>
        </Box>
        <Box className={classes.linkContainer}>
          <FooterLink text="Asiakaspalvelu" />
          <FooterLink text="Usein kysyttyä" />
          <FooterLink text="Kieliasetukset" />
          <FooterLink text="Hakusivu" />
          <FooterLink text="Alennetut tuotteet" />
          <FooterLink text="Suosituimmat tuotteet" />
          <FooterLink text="Tietoa minusta" />
          <FooterLink text="Ota yhteyttä" />
        </Box>
      </Box>

      <Typography className={classes.copyright}>
        @2021 Herkkupersikka.com
      </Typography>
    </Box>
  );
};

// TODO: move to own folder/file
interface FooterLinkProps {
  text: string;
}

// ? is the Link from react-router-dom the best for this?
const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  const classes = useClasses();
  return (
    <Link to="/products/1" className={classes.link}>
      {text}
    </Link>
  );
};

const useClasses = makeStyles({
  footer: {
    width: "100%",
    height: "680px",
    backgroundColor: "#FBE6DA",
    marginTop: "20px",
  },
  // TODO: replace with real logo image
  logo: {
    maxWidth: "460px",
    maxHeight: "460px",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#F5C6AA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // TODO: color & sizes from theme
  logoText: {
    color: "white",
    fontSize: "3em",
  },
  linkContainer: {},
  // TODO: color & sizes from theme
  link: {
    textDecoration: "none",
    display: "block",
    fontFamily: "sans-serif",
    fontSize: "1.1em",
    color: "#5F3A1C",
    "&:nth-of-type(3), &:nth-of-type(6)": {
      marginBottom: "30px",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  // ! not responsive, logo pushes links outside of view with small screens
  logoAndLinks: {
    margin: "auto",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "94%",
  },
  copyright: {
    fontSize: "1.1em",
    color: "#5F3A1C",
    textAlign: "center",
  },
});
