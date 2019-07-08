import styled from 'styled-components';
import { darken } from 'polished';

const ButtonAlpha = styled.button`
  padding: 12px 8px;
  width: 137px;
  font-size: 1rem;
  font-weight: 500;
  color: #4297cd;
  text-align: center;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: ease 0.25s color;

  &:hover {
    color: ${darken(0.15, '#4297cd')};
  }
`;

export default ButtonAlpha;
