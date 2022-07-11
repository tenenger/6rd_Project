export const ALPHA_REGEX = /^[a-zA-Z]{1,}$/;
export const NUMBER_REGEX = /^[0-9]{1,}$/;
export const SPCIAL_REGEX = /^[^0-9a-zA-Z]{1,}$/;
export const ALPHA_NUMBER_SPECIAL_COMBINATION_REGEX =
  /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^0-9a-zA-Z]).{8,20}/;
export const NAME_REGEX = /^[가-힣]{2,8}$/;
export const PHONENUMBER_REGEX = /^01(0|1|[6-9])[0-9]{8}$/;
export const THREE_TIMES_SUCCESSIVE_REGEX = /(.)\1\1/;
export const EMAIL_REGEX = /^[0-9A-Za-z]{3,}@[A-Za-z]{2,}\.[A-Za-z]{2,}$/;
