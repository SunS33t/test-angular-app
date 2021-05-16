import { Pizza } from ".";
import { Status } from "./status";

export interface Order{
    orderId:number;
    content:Map<Pizza,number>;
    status: Status;
}