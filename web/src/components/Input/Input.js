import styled from 'styled-components';

const Input = styled.input`
  display: block;
  margin: 0 0 24px 0;
  padding: 0 0 8px 0;
  width: 100%;
  font-size: 1rem;
  color: #ffffff;
  background: transparent;
  border: none;
  border-bottom: 1px solid #979797;
  transition: linear 0.25s border;

  &:focus {
    border-bottom: 1px solid #ffffff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default Input;
