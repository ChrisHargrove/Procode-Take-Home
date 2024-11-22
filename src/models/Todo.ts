export interface Todo {
  createdAt: string;
  completedAt?: string;
  archivedAt?: string;

  id: string;
  title: string;
  description?: string;
}
