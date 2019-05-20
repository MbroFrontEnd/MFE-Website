import styled from 'styled-components';

const Sponsors = styled.div`
  display: flex;
  align-items: center;

  > a {
    margin-right: 2rem;
    transition: all 0.25s linear;

    &:hover {
      opacity: 0.75;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Sponsors;
