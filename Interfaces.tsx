import { StaticImageData } from "next/image";

export interface LeaderboardTableDataItem {
    rank?: string|number;
    address: string;
    trades: number;
    rewards: number;
}
export type TypeLeaderboardTableDataProps = {
  leaderboardTableData: LeaderboardTableDataItem[]; // Array of table data objects
};
export interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  }

export interface NavigationLink {
    title: string;
    link: string;
  }

export interface LaunchpadIDOs {
  image:string | StaticImageData,
  name:string,
  value:number,
  token:string,
  type:boolean,
  isSelected:boolean,
  details:IdoDetails,
}

export interface IdoDetails {
  date:string,
  endsIn:string,
  tokenSupply:string,
  progress:string,
  participants:string,
  table:IdoTable[],
  amount:number,
  indicatorsData:IdoIndicatorsData[],
}

export interface IdoTable {
  label:string,
  value:number|string
}
export interface IdoIndicatorsData {
  label:string,
  date:string,
  done:boolean,
}