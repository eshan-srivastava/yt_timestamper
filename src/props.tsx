export type TimeInSec = number;

export type URL =  {
    baseUrl: string;
    watchedTime: TimeInSec;
    totalTime: TimeInSec;
}

export type VideoCardProp = {
    name: string;
    url: URL;
}
