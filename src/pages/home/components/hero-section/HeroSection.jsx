import { CategoryCarousel } from "../../../../components/carousel";
import { SectionContainer } from "../../../../components/section-container";

export const HeroSection = function ({ categories }) {
  return (
    <SectionContainer>
      <CategoryCarousel {...{ categories }}></CategoryCarousel>
    </SectionContainer>
  );
};
