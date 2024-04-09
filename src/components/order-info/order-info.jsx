export function OrderInfo() {
  const orderInfo = [
    ["Sub Total", "$119.69"],
    ["Discount", "$119.69"],
    ["Delivery Fee", "$119.69"],
    ["Grand Total", "$119.69"],
  ];
  const tableContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    fontSize: "16px",
    fontWeight: "500",
  };
  return (
    <>
      <h1 style={{ fontSize: "20px", marginBottom: "8px" }}>Order Details</h1>
      <hr style={{ marginBottom: "35px" }} />

      {orderInfo.map(([detail, amount], index) => (
        <div
          key={index}
          style={{
            ...tableContainer,
            ...(index === orderInfo.length - 1 ? { fontWeight: "bold" } : {}),
          }}
        >
          <div
            style={{
              color: "#626262",
              ...(index === orderInfo.length - 1 ? { color: "#171520" } : {}),
            }}
          >
            {detail}
          </div>
          <div style={{ color: "#171520" }}>{amount}</div>
        </div>
      ))}
    </>
  );
}
