import { Box, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { FooterLink } from "./FooterLink";
import { FooterLogo } from "./FooterLogo";

interface Props {}

export const Footer: React.FC<Props> = () => {
  const classes = useClasses();

  return (
    <Box component="footer" className={classes.footer}>
      <Box className={classes.logoAndLinks}>
        <FooterLogo />

        <Box>
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
        @2021-2023 Herkkupersikka.com
      </Typography>
    </Box>
  );
};

const useClasses = makeStyles({
  footer: {
    width: "100%",
    height: "fit-content",
    backgroundColor: "#FBE6DA",
    marginTop: "20px",
  },
  logoAndLinks: {
    maxWidth: "1200px",
    padding: "50px 50px",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "50px",
  },
  copyright: {
    fontSize: "1.1em",
    color: "#5F3A1C",
    textAlign: "center",
  },
});
