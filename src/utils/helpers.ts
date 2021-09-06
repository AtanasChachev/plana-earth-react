import moment, { Moment } from 'moment';

export const formatDate = (date: Date | Moment | string | null, format: string): string => {
  return moment(date).format(format);
};

export const capitalizeWords = (sentence: string): string => {
  return sentence.replace(/\b\w/g, l => l.toUpperCase());
};