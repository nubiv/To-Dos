export interface Task {
  id?: number;
  content: string;
  translatedContent?: string;
  status?: STATUS;
  createdAt?: Date;
  updatedAt?: Date;
}

export type STATUS = 'TO DO' | 'IN PROGRESS' | 'DONE';
