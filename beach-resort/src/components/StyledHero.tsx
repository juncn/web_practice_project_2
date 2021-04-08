import styled from 'styled-components';
import defaultBcg from '../assets/images/room-1.jpeg';

interface Props {
  img: string;
};

const StyledHero = styled.header<Props>`
  min-height: 66vh;
  background: url(${props => props.img || defaultBcg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;