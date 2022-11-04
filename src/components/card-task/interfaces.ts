import { ICheckListArray } from "@interfaces/ITask";

export interface ICarTask {
  title: string;
  id: number,
  isFinished: boolean,
  check_list?: ICheckListArray[], 
}
