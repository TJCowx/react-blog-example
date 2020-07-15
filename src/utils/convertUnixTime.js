import moment from 'moment';

/**
 * Takes a UNIX timestampe and converts it into DD-MM-YYYY HH:mm:ss format
 * @param timestamp The UNIX timestamp
 */
export const convertUnixTime = (timestamp) => {
  return moment.unix(timestamp).format('DD-MM-YYYY HH:mm:ss');
}