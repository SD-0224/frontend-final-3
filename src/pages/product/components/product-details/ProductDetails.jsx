import { TitlesSection } from "./components/titles-section/TitlesSection";
import { RatingsSection } from "./components/ratings-section/RatingsSection";
import { PricingSection } from "./components/pricing-section/PricingSection";

export const ProductDetails = function ({ ...props }) {
  return (
    <>
      <TitlesSection {...props} />
      <RatingsSection {...props} />
      <PricingSection {...props} />
    </>
  );
};
