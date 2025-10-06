
export interface Governorate {
  id: string;
  name: string;
  enName: string;
  path: string;
}

export interface Candidate {
  id: number;
  name: string;
  party: string;
  imageUrl: string;
  verified: boolean;
}

export interface NewsArticle {
    id: number;
    title: string;
    summary: string;
    date: string;
}
