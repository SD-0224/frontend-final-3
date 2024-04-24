import { Box } from "@mui/material";
import { AboutHeadline } from "./components/about-headline";
import { BannerImage } from "./components/banner-image";
import { AboutCategory } from "./components/about-category";
import { SectionContainer } from "../../components/section-container";

export function About() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
      <BannerImage
        imageSrc={"images/about/banner.png"}
        title={"ABOUT"}
        description={"Lorem Ipsum is simply dummy text of the printing."}
      />
      <AboutHeadline
        title={"About"}
        description={
          "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. "
        }
      />
      <SectionContainer paddingX="20px">
        <AboutCategory
          imageSrc={"images/about/bags.png"}
          title={"About"}
          description={
            "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. "
          }
        />
      </SectionContainer>
      <SectionContainer paddingX="20px">
        <AboutCategory
          imageSrc={"images/about/watches.png"}
          title={"About"}
          imgPosition="left"
          description={
            "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. "
          }
        />
      </SectionContainer>

      <SectionContainer paddingX="20px">
        <AboutCategory
          imageSrc={"images/about/glasses.png"}
          title={"About"}
          description={
            "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. "
          }
        />
      </SectionContainer>
    </Box>
  );
}
