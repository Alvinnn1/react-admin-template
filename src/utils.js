import moment from 'moment';
/**
 * @return {string}
 */
export function handleTime(time) {
    if (!time) return '';
    return moment(time * 1000).format('YYYY-MM-DD HH:mm:ss');
}
export function handleDate(time) {
    if (!time) return '';
    return moment(time * 1000).format('YYYY-MM-DD');
}

