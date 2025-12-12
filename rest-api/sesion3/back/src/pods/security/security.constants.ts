import { ENV } from '#core/constants/index.js';
import { CookieOptions } from 'express';

export const JWT_SIGN_ALGORITHM = 'HS256';

export const COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  secure: ENV.IS_PRODUCTION,
};
