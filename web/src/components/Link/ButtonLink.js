import styled from 'styled-components';
import { lighten } from 'polished';

const ButtonLink = styled.a`
  padding: 12px 8px;
  width: 137px;
  font-size: 1rem;
  font-weight: 500;
  color: #454875;
  text-align: center;
  text-decoration: none;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: ease 0.25s color;

  &:hover {
    color: ${lighten(0.15, '#454875')};
  }
`;

export default ButtonLink;
