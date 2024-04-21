import { SectionContainer } from "../../../../components/section-container";
import { HorizontalScroll } from "../../../../components/horizontal-scroll";
import { HandpickedCard } from "./components/handpicked-card";

export const HandpickedSection = function ({ collections }) {
  return (
    <SectionContainer paddingX="0px">
      <HorizontalScroll
        title="Handpicked Collections"
        color="var(--white)"
        backgroundColor="var(--primary)"
      >
        {collections?.map((collection) => (
          <HandpickedCard key={collection.name} {...collection} />
        ))}
      </HorizontalScroll>
    </SectionContainer>
  );
};
