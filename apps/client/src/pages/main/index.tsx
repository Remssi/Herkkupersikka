import { ContentWrapper, CardContainer, Hero } from "../../components";

interface Props {}

export const Main: React.FC<Props> = () => {
  return (
    <ContentWrapper>
      <Hero />
      <CardContainer />
    </ContentWrapper>
  );
};
