// types/caseStudy.ts

export type PageKind = "project" | "design" | "both";

export type ExternalLink = {
  img?:string;
  label: string;
  href: string;
};

export type HeaderInfo = {
  kind: PageKind;
  title: string;
  shortDescription: string;
  work?: string[];
  responsibilities?: string;
  links?: ExternalLink[];
};

export type ActionButtons = {
  primary: { label: string; href: string; external?: boolean, img?:string };
  secondary?: { label: string; href: string; external?: boolean, img?:string };
};

// ---------- Media assets ----------
export type MediaType = "image" | "video";

export type MediaAsset = {
  type: MediaType;
  src: string;
  alt?: string;
  poster?: string;        // for video
  caption?: string;
  side?: "left" | "right";
  x?: number,
  w?: number,
  y?: number
};

// ---------- Repeating Section ----------
export type BlockBase = {
  id: string;
  className?: string;     // per-block layout tweak (padding, background, etc.)
};

export type TextBlock = BlockBase & {
  type: "text";
  variant?: "body" | "callout" | "quote";
  heading?: string;
  text: string | string[]; // allow multiple paragraphs
};

export type MediaBlock = BlockBase & {
  type: "media";
  variant?: "single" | "double" | "grid";
  assets: MediaAsset[];     // 1–2 commonly, but supports more
};

export type HeroMockupBlock = BlockBase & {
  type: "hero-mockup";
  bgText: string;           // e.g. "THE REAL SHIT"
  assets: MediaAsset[];     // e.g. 2 laptop images
  bgTextClassName?: string; // per-project styling tweaks
};

export type MixedBlock = BlockBase & {
  type: "mixed";
  variant: "media-left" | "media-right" | "stack";
  media: MediaAsset[];      // usually 1–2
  text?: TextBlock;         // optional paired text
};

export type CaseStudyBlock =
  | TextBlock
  | MediaBlock
  | HeroMockupBlock
  | MixedBlock;

// ---------- Full page model ----------
export type CaseStudy = {
  slug: string;              // route key
  header: HeaderInfo;
  introAssets?: MediaAsset; // "at least 1 image, rare chance for 2"
  blocks: CaseStudyBlock[];
  actions?: ActionButtons;   // optional two buttons at the end
};
