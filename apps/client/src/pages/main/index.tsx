import { FC } from "react";
import { ContentWrapper, CardContainer, Hero } from "../../components";

interface Props {}

export const Main: FC<Props> = () => {
  return (
    <ContentWrapper>
      <Hero />
      <CardContainer />
    </ContentWrapper>
  );
};
