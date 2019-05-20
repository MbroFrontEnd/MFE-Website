import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-bottom: 4rem;
`;

const StyledTime = styled.time`
  font-size: 3rem;
  color: ${props => props.theme.text.color};
`;

const StyledH2 = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 3rem;
  font-weight: 400;
  color: ${props => props.theme.brand.lightBlue};
`;

const StyledAddress = styled.address`
  display: flex;
  font-size: 1.5rem;
  color: ${props => props.theme.text.color}
  font-style: normal;
  align-content: center;
`;

const LocationIcon = styled.img`
  margin-right: 1rem;
`;

function NextEvent() {
  return (
    <StyledDiv>
      <StyledTime>27th June</StyledTime>
      <StyledH2>A Night of JAMStack</StyledH2>
      <StyledAddress>
        <LocationIcon
          src={require('../assets/icons/location.svg')}
          width="24"
          height="24"
          alt="Location"
        />
        Hit The Bar, Middlesbrough
      </StyledAddress>

      <p>
        We are joined by some good friends from another part of the country who
        have taken the time to come along and speak to us about this amazing
        static site architecture. Jamie absolutely loves it and he doesn’t shut
        up about it and it does everybody’s head in.
      </p>

      <div>
        <h3>My Amazing Talk</h3>
        <p>By Speaker Number One</p>
        <p>
          We are joined by some good friends from another part of the country
          who have taken the time to come along and speak to us about this
          amazing static site architecture. Jamie absolutely loves it and he
          doesn’t shut up about it and it does everybody’s head in.
        </p>
      </div>

      <div>
        <h3>My Amazing Talk</h3>
        <p>By Speaker Number One</p>
        <p>
          We are joined by some good friends from another part of the country
          who have taken the time to come along and speak to us about this
          amazing static site architecture. Jamie absolutely loves it and he
          doesn’t shut up about it and it does everybody’s head in.
        </p>
      </div>
    </StyledDiv>
  );
}

export default NextEvent;
