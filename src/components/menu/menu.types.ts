interface LinkI {
  id?: string;
  link: string;
  text: string;
}

interface LinksI {
  links: LinkI[];
}

export type { LinkI, LinksI };
