export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface LegalContent {
  privacy: LegalDocument;
  terms: LegalDocument;
}

export type LegalType = keyof LegalContent;

export interface LegalPopoverProps {
  type: LegalType;
  label: string;
}