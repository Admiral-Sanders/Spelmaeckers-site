import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime); // enables .fromNow(), .from()
dayjs.extend(customParseFormat); // enables dayjs(str, format) strict parsing
dayjs.extend(utc); // enables .utc()
dayjs.extend(localizedFormat); // enables 'LL', 'LLL' style tokens

export default dayjs;
