export interface TableDataItem {
    rank?: string|number;
    address: string;
    trades: number;
    rewards: number;
}

export interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  }
