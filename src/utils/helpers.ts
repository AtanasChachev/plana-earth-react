import moment from 'moment';

export const formatDate = (date: Date | string, format: string): string => {
  return moment(date).format(format);
};