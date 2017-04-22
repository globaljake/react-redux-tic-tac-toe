import styled from 'styled-components';
import Resize from 'react-resize-to-aspect-ratio';
import { COLORS } from '../../styles/themes';
import { fadeIn } from '../../styles/animations';


export const GameWrap = styled.div`
  display:flex;
  flex: 1;
  flex-direction: column;
  max-width: 500px;
  background-color: ${COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

export const GameBoardWrap = styled(Resize)`
  display:flex;
  flex: 1;
  max-width: 500px;
  max-height: 500px;
  height: 100%;
  animation: ${fadeIn} 1s ease-out
`;
export const WinnerView = styled(Resize)`
  display:flex;
  flex: 1;
  flex-direction: column;
  max-width: 500px;
  max-height: 500px;
  height: 100%;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-out
`;

export const HeaderWrap = styled.div`
  display:flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  padding: 40px;
`;

export const HeaderSection = styled.div`
  display:flex;
  flex: 1;
  align-items:center;
  justify-content: center;
  flex-direction: row;
  ${props => (props.turn ? `box-shadow: 0 0 1px 0 ${COLORS.GREY};` : 'box-shadow: none;')}
  cursor: pointer;
  transition: all .1s ease-in-out;
  margin: 0 50px;
`;
export const PieceWrap = styled.div`
  width: 30px;
  height: 30px;
  padding-top: 7px;
`;
export const ResetButton = styled.div`
  color: ${COLORS.GREY}
  cursor: pointer;
  border: 1px solid ${COLORS.GREY}
  border-radius: 3px;
  padding: 10px 15px;
  transition: all .3s ease-in-out;

  &:hover {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.GREY};
  }

`;
export const WinnerText = styled.div`
  font-size: 400%;
  padding-bottom: 10px;
`;
