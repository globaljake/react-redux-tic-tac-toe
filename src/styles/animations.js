import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const animateIn = keyframes`
  0% { opacity: 0; transform:scale(0); }
  80% { opacity: 1; transform:scale(1.1); }
  100% { opacity: 1; transform:scale(1); }
`;
