export const SectionContainer = function ({
  paddingY = "0px",
  paddingX = "24px",
  padding = `${paddingY} ${paddingX}`,
  children,
  ...props
}) {
  return (
    <section {...props} style={{ padding }}>
      {children}
    </section>
  );
};
