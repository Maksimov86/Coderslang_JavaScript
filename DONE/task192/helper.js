import { dangerousFunction } from './functions.js';

export const safeCall = () => {
  try {
    dangerousFunction();
  } catch {
    
  }
}
