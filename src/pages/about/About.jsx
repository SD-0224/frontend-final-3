import { Box } from "@mui/material";
import { AboutHeadline } from "./components/about-headline";
import { BannerImage } from "./components/banner-image";
import { AboutCategory } from "./components/about-category";
import { SectionContainer } from "../../components/section-container";
import { useResetPageScroll } from "../../hooks/reset-page-scroll";

const title = "About";
const description =
  "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. ";

export function About() {
  useResetPageScroll();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
      <BannerImage
        imageSrc={"images/about/banner.png"}
        title={title.toUpperCase()}
        description={description}
      />

      <AboutHeadline {...{ title, description }} />

      <SectionContainer paddingX="20px">
        <AboutCategory
          imageSrc={"images/about/bags.png"}
          {...{ title, description }}
        />
      </SectionContainer>

      <SectionContainer paddingX="20px">
        <AboutCategory
          imageSrc={"images/about/watches.png"}
          imgPosition="left"
          {...{ title, description }}
        />
      </SectionContainer>

      <SectionContainer padding="0 20px 117px 20px">
        <AboutCategory
          imageSrc={"images/about/glasses.png"}
          {...{ title, description }}
        />
      </SectionContainer>
    </Box>
  );
}
