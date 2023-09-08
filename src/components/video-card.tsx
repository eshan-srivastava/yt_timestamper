import { ReactComponentElement, useState } from "react";
import { VideoCardProp, TimeInSec } from "../props";

const VideoCard: React.FC<VideoCardProp> = (props) => {
    const fmtName = (videoName: string): string => {
		const MAX_NAME_LENGTH = 15;
		let name = undefined;
		if (videoName.length > 15){
			name = `${videoName.substring(0, MAX_NAME_LENGTH-3)}...`;
		} else {
			name = videoName;
		}
		return name;
	};

    const fmtTime = (time: TimeInSec): string => {
        const hh: number = Math.floor(time / 3600);
        const mm: number = Math.floor((time % 3600) / 60);
        const ss: number = time % 60;

        const formattedTime: string = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
        return formattedTime;
    };

    return (
        <div className="bg-[#333] text-slate-200 items-center flex justify-between rounded-lg border py-1.5 px-2 ">
            <h1 className="text-xl font-medium`">{fmtName(props.name)}</h1>
            <p className="text-sm">
                {`${fmtTime(props.url.watchedTime)} / ${fmtTime(props.url.totalTime)}`}
            </p>
        </div>
    );
};

export default VideoCard;
