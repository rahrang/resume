export const getCompanyId = (url: URL) => {
  return url.searchParams.get("c") || url.searchParams.get("company");
};

export const buildUtmLinkBuilder = (companyId: string | null) => {
  return (href: string): string => {
    const url = new URL(href);

    url.searchParams.set("utm_campaign", companyId ?? "general");
    url.searchParams.set("utm_source", "resume");
    url.searchParams.set("utm_medium", companyId ? "pdf" : "web");

    return url.toString();
  };
};
