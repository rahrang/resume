const COMPANY_ID: string | null = null;

export const buildUtmLink = (href: string): string => {
  const url = new URL(href);

  url.searchParams.set("utm_campaign", COMPANY_ID ?? "general");
  url.searchParams.set("utm_source", "resume");
  url.searchParams.set("utm_medium", "pdf");

  return url.toString();
};
