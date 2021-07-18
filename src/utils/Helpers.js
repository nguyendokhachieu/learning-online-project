export const Helpers = {

    getTimeInString(seconds) {
        seconds = Number(seconds);

        let minutes = Math.floor(seconds/60);
        let remainSeconds = seconds - minutes * 60;

        if (minutes > 59) {
            let hours = Math.floor(minutes/60);
            let remainMinutes = minutes - hours * 60;

            return `${ hours < 10 ? '0' : '' }${ hours }:${ remainMinutes < 10 ? '0' : '' }${ remainMinutes }:${ remainSeconds < 10 ? '0' : '' }${ remainSeconds }`;
        }

        return `${ minutes < 10 ? '0' : '' }${ minutes }:${ remainSeconds }`;
    }
    
}