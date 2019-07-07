import styled from 'styled-components';

const Textarea = styled.textarea`
  margin: 0 0 24px 0;
  display: block;
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

export default Textarea;
