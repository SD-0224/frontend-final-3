import { SectionContainer } from "../../../../components/section-container";
import { HorizontalScroll } from "../../../../components/horizontal-scroll";
import { HandpickedCard } from "./components/handpicked-card";
import { Link } from "react-router-dom";

export const HandpickedSection = function ({ collections }) {
  return (
    <SectionContainer paddingX="0px">
      <HorizontalScroll
        title="Handpicked Collections"
        color="var(--white)"
        backgroundColor="var(--primary)"
      >
        {collections?.map((collection) => (
          <Link
            key={collection.categoryId}
            to={`/handpicked?categoryId=${collection.categoryId}`}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <HandpickedCard {...collection} />
          </Link>
        ))}
      </HorizontalScroll>
    </SectionContainer>
  );
};
