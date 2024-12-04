import { checkAccess, grantAccess, denyAccess } from './helper.js';

export const auth = (user, password) => {
  if (checkAccess(user, password)) {
    return grantAccess(user.name);
  } else {
    return denyAccess(user.name);
  }
}