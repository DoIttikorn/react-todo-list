export const getClasses = (classes: any[]) =>
  classes
    .filter((item) => item !== "undefined")
    .join(" ")
    .trim();
