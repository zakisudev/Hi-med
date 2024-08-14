export const extractSlugFromUrl = (url: string): string | null => {
  const match = url.match(/\/categories\/([^\/]+)/);
  return match ? match[1] : null;
};