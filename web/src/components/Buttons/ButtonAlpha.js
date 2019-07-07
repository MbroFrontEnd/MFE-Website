import styled from 'styled-components';
import { darken } from 'polished';

const ButtonAlpha = styled.button`
  padding: 12px 8px;
  width: 137px;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  background-color: #4297cd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: ease 0.25s background;

  &:hover {
    background-color: ${darken(0.1, '#4297cd')};
  }
`;

export default ButtonAlpha;
