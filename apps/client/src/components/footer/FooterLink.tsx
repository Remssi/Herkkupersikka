import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  text: string;
}

// ? is the Link from react-router-dom the best for this?
export const FooterLink: React.FC<Props> = ({ text }) => {
  const classes = useClasses();
  return (
    <Link to="/products/1" className={classes.link}>
      {text}
    </Link>
  );
};

const useClasses = makeStyles({
  // TODO: color & sizes from theme
  link: {
    textDecoration: "none",
    textAlign: "center",
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
});
