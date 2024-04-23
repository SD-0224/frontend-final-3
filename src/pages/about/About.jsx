import { Box } from "@mui/material";
import { AboutHeadline } from "./components/about-headline";
import { BannerImage } from "./components/banner-image";
import { AboutCategory } from "./components/about-category";
import { SectionContainer } from "../../components/section-container";

export function About() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
      <BannerImage
        imageSrc={
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
        }
        description={
          "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
        }
      />
      <AboutHeadline />
      <SectionContainer paddingX="20px">
        <AboutCategory
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
        />
      </SectionContainer>
      <SectionContainer paddingX="20px">
        <AboutCategory
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
          imgPosition="left"
        />
      </SectionContainer>

      <SectionContainer paddingX="20px">
        <AboutCategory
          imageSrc={
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
          }
        />
      </SectionContainer>
    </Box>
  );
}
