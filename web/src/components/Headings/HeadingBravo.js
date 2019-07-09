import styled from 'styled-components';

const HeadingBravo = styled.h3`
  margin: 0 0 ${props => (props.marginBottom ? props.marginBottom : '2rem')} 0;
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.text.color};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default HeadingBravo;
