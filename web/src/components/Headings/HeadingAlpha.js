import styled from 'styled-components';

const HeadingAlpha = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 3rem;
  font-weight: 400;
  color: ${props => props.theme.brand.lightBlue};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default HeadingAlpha;
