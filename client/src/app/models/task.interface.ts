export interface Task {
  id?: number;
  content: string;
  status?: STATUS;
  createdAt?: Date;
  updatedAt?: Date;
}

export type STATUS = 'TO DO' | 'IN PROGRESS' | 'DONE';
