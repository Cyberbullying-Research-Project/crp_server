// narratives.interface.ts

export interface Narratives {
  id: number;
  title: string;
  body: string;
  user_id: number;
  status: string;
  created_at: Date;
  posts: number[];
  category: number;
}
