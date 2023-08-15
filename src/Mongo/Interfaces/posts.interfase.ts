// posts.interface.ts

export interface Posts {
  id: number;
  title: string;
  body: string;
  user_id: number;
  status: string;
  created_at: Date;
  resources: number;
}
