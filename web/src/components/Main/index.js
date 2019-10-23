import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto 5rem auto;
  max-width: 980px;

  @media screen and (max-width: 1024px) {
    padding: 0 1rem;
  }

  a {
    color: ${props => props.theme.text.color};
    text-decoration: underline;
    font-weight: 600;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`;

export default Main;
