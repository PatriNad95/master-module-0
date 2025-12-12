import e, { Request } from 'express';
import { expressjwt } from 'express-jwt';
import { ENV, HEADERS } from '#core/constants/index.js';
import { JWT_SIGN_ALGORITHM } from './security.constants.js';

export const jwtMiddleware = expressjwt({
  secret: ENV.TOKEN_AUTH_SECRET, // Verify token is valid (not expired nor manipulated)
  algorithms: [JWT_SIGN_ALGORITHM],
  getToken: (req: Request) => {
    console.log('Headers:', req.headers.cookie);
    const [, tokenWithBearer] =
      req.headers && req.headers.cookie
        ? req.headers.cookie.split(`${HEADERS.AUTHORIZATION}=`)
        : [];
    const decodedValue = decodeURIComponent(tokenWithBearer);

    const [, token] = decodedValue?.split(`${HEADERS.BEARER} `) || [];
    //Atencion a todos lo cambios que tuve que hacer en este sitio para que ande con cookies

    return token;
  },
});

// export const tokenMiddleware = (req: Request, res, next) => {
//   const tokenWithBearer = req.headers
//       ? (req.headers[HEADERS.AUTHORIZATION] as string)
//       : '';

//     const [, token] = tokenWithBearer?.split(`${HEADERS.BEARER} `) || [];

//     const user = await getUser(token);
//     if (user) {
//       req.userSession = user;
//       next();
//     } else {
//       res.sendStatus(401);
//     }
// };
