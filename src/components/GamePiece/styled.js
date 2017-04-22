import styled from 'styled-components';
import { COLORS } from '../../styles/themes';
import { animateIn } from '../../styles/animations';

const xDegrees = 45;
const thickness = '15px';
const smallThickness = '3px';
export const X = styled.div`

  width: 80%;
  height: 80%;
  position: relative;
  ${props => (props.small ? `border-radius:${smallThickness};` : `border-radius:${thickness};`)}
  ${props => (!props.small ? `animation: ${animateIn} .2s ease-out;` : null)}

  &::after,&::before{
    position:absolute;
    top:45%;
    width:100%;
    content:'';
    display:block;
    ${props => (props.small ? `height:${smallThickness};` : `height:${thickness};`)}

    background-color: ${props => props.winnerColor || `${COLORS.DARK_GREY}`};

  }
  &::after{
    -webkit-transform: rotate(${xDegrees}deg);
    -moz-transform: rotate(${xDegrees}deg);
    -ms-transform: rotate(${xDegrees}deg);
    -o-transform: rotate(${xDegrees}deg);
    transform: rotate(${xDegrees}deg);
  }
  &::before{
    -webkit-transform: rotate(-${xDegrees}deg);
    -moz-transform: rotate(-${xDegrees}deg);
    -ms-transform: rotate(-${xDegrees}deg);
    -o-transform: rotate(-${xDegrees}deg);
    transform: rotate(-${xDegrees}deg);
  }


`;

export const O = styled.div`
  width: 70%;
  height: 70%;
  border-radius:50%;
  border: ${thickness} solid ${COLORS.DARK_GREY};
  ${props => (props.small ? `border-width:${smallThickness};` : `border-width:${thickness};`)}
  border-color: ${props => props.winnerColor || `${COLORS.DARK_GREY}`};
  box-sizing: border-box;
  ${props => (!props.small ? `animation: ${animateIn} .2s ease-out` : null)}
`;
