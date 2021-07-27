import { CardMedia, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {}

// TODO: conditional cardActionArea, if the hero contains link
// TODO: add image prop to CardMedia with the link to picture
// ? is CardMedia best for image without card?
export const Hero: React.FC<Props> = () => {
  const classes = useClasses();
  return (
    <CardActionArea onClick={() => console.log("hero clicked")}>
      <CardMedia
        className={classes.hero}
        component="img"
        height="300px"
        alt="hero"
        title="hero"
      />
    </CardActionArea>
  );
};

const useClasses = makeStyles({
  hero: {
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#F5C6AA",
  },
});
