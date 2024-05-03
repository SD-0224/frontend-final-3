import { TitlesSection } from "./components/titles-section/TitlesSection";
import { RatingsSection } from "./components/ratings-section/RatingsSection";
import { PricingSection } from "./components/pricing-section/PricingSection";
import { Box } from "@mui/system";

export const ProductDetails = function ({ ...props }) {
  return (
    <>
      <TitlesSection {...props} />
      <Box sx={{ marginTop: "32px", marginBottom: "24px" }}>
        <RatingsSection {...props} />
      </Box>
      <PricingSection {...props} />
    </>
  );
};
