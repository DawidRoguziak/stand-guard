import dayjs from "dayjs";
import Duration from "dayjs/plugin/duration";

dayjs.extend(Duration);

export const formatDate = (date: string, format: string): string => {
    return dayjs(date).format(format);
}


export const calcTimeFromMinutes = (minutes: number): string => {

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    const duration = dayjs.duration({
        hours: hours,
        minutes: mins,
    });

    return duration.format('HH:mm');
}