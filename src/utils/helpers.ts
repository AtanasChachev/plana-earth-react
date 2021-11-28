import moment, { Moment } from 'moment';

/* Function that format the dates in desired way. */
export const formatDate = (date: Date | Moment | string | null, format: string): string => {
  return moment(date).format(format);
};

/* Function that capitalizes the words's first letter in sentence. */
export const capitalizeWords = (sentence: string): string => {
  return sentence.replace(/\b\w/g, l => l.toUpperCase());
};

/* Function that returns if the devie is mobile */
export const isMobileDevice = (): boolean => {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
};