import styled from 'styled-components';
import { COLORS } from '../../styles/themes';


export const GameBoardWrap = styled.div`
  display: flex;
  flex: 1;

  &> div {
    flex: 1;
    flex-direction: column;
  }
`;

export const GameBoardSlotRow = styled.div`
  display: flex;
  height: 33.3333334%;
  flex-direction: row;
`;

export const GameBoardSlot = styled.div`
  color: transparent;
  width: 33.3333334%;
  display: flex;
  flex:1
  align-items: center;
  justify-content: center;
  border: 5px solid ${COLORS.GREY};
  ${props => (props.noTop ? 'border-top: none' : null)};
  ${props => (props.noLeft ? 'border-left: none' : null)};
  ${props => (props.noRight ? 'border-right: none' : null)};
  ${props => (props.noBottom ? 'border-bottom: none' : null)};
  box-sizing: border-box;
  transition: all .3s ease-in-out;
  cursor: pointer;
`;
