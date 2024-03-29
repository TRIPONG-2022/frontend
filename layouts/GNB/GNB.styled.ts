import styled from 'styled-components';

import { Z_INDEX } from '@/styles/z-index';
import { HEADER_HEIGHT } from '@/constants/menus';

export const GNBContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.HEADER};
  background-color: #ffffff;
`;

export const NavigationWrapper = styled.nav`
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled.a`
  cursor: pointer;
`;
