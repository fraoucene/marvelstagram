import crypto from 'crypto';

export const API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5";
export const API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
export const TIME_STAMPE_VALUE = + new Date();

export const BASE_URL = "http://gateway.marvel.com:80";
export const HEROS_URL = "/v1/public/characters";

export const LIMIT_KEY = "limit";
export const LIMIT_VALUE = 15;
export const OFFSET_KEY = "offset";
export const TIME_STAMPE_KEY = "ts";
export const API_PUBLIC_KEY = "apikey";
export const HASH_KEY = "hash";
export const HASH_VALUE = crypto.createHash('md5').update(TIME_STAMPE_VALUE + API_PRIVATE + API_PUBLIC).digest('hex');



