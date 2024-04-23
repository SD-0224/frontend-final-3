import { AboutText } from "../about-text";

const typographyContainer = {
  justifyContent: "center",
  textAlign: "center",
  width: "56%",
  margin: "auto",
};

export function AboutHeadline() {
  return <AboutText {...{ typographyContainer }} isoverflowHidden={false} />;
}
