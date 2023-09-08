export type TimeInSec = number;

export interface URL {
    baseUrl: string;
    watchedTime: TimeInSec;
    totalTime: TimeInSec;
}

export interface VideoCardProp {
    name: string;
    url: URL;
}
