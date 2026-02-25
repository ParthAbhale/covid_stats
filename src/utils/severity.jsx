export const getSeverityColor = cases => {
  if (cases > 10_000_000) return "red";
  if (cases > 1_000_000) return "orange";
  return "green";
};