export const parseFontSize = (fontSize: string) => {
  const match = fontSize.match(/(\d+)/);
  return match ? Number(match[1]) : 16;
};
