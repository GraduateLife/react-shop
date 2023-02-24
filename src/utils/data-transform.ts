/**
 *
 * @param targetEnum Only works for mere string enums!
 */

export const arrayFromStringEnum = (targetEnum: object): string[] => {
  const mightRes = Object.values(targetEnum);
  mightRes.forEach((v) => {
    if (typeof v !== "string")
      throw new Error(
        "Fool! Don't try this if enum contains both string and number!"
      );
  });
  return mightRes;
};
