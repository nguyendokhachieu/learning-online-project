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
    },

    getTimeAgoInString(sourceTime) {
        const dayjs = require('dayjs');
        const relativeTime = require('dayjs/plugin/relativeTime');
        const updateLocale = require('dayjs/plugin/updateLocale');
        dayjs.extend(relativeTime);
        dayjs.extend(updateLocale);

        const localeObject = {
            relativeTime: {
            future: 'trong %s',
            past: '%s trước',
            s: 'vài giây',
            m: 'một phút',
            mm: '%d phút',
            h: 'một giờ',
            hh: '%d giờ',
            d: 'một ngày',
            dd: '%d ngày',
            M: 'một tháng',
            MM: '%d tháng',
            y: 'một năm',
            yy: '%d năm'
            }
        };

        dayjs.updateLocale('en', localeObject);

        return dayjs(sourceTime).fromNow();
    }
    
}