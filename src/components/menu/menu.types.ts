type OrientationT = "horizontal" | "vertical";

interface LinkI {
  id?: string;
  link: string;
  text: string;
}

interface MenuI {
  links: LinkI[];
  orientation?: OrientationT;
  title?: string;
}

export type { LinkI, MenuI };
