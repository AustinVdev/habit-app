export interface ICheckListArray {
  id: number;
  title: string;
  isFinished: boolean;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  create_at: string;
  positiveCounter: number;
  negativeCounter: number;
  isFinished: boolean;
  type: string;
  repeatDate: string;
  finishDate: string;
  repetitionDays: string[];
  check_list?: ICheckListArray[];
}
