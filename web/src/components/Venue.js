import React from 'react';
import styled from 'styled-components';

import { HeadingBravo } from '../components/Headings';
import { Text } from '../components/Text';
import { Section } from '../components/Section';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAside = styled.aside`
  margin-right: 40px;
`;

const StyledAddress = styled.address`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  color: #97daf7;
`;

const StyledH4 = styled.h4`
  margin: 0 0 16px 0;
  font-size: 24px;
  color: #FFFFFF:
`;

const StyledImg = styled.img`
  max-width: 375px;
`;

const Venue = () => (
  <Section>
    <HeadingBravo>Venue</HeadingBravo>
    <StyledDiv>
      <StyledAside>
        <StyledH4>Hit The Bar, Middlesbrough</StyledH4>
        <Text>
          We are joined by some good friends from another part of the country
          who have taken the time to come along and speak to us about this
          amazing static site architecture. Jamie absolutely loves it and he
          doesn’t shut up about it and it does everybody’s head in.
        </Text>
        <StyledAddress>
          Hit The Bar, Bridge Street East, Middlesbrough
        </StyledAddress>
      </StyledAside>
      <StyledImg
        src={require('../assets/images/hit-the-bar.jpg')}
        alt="Hit The Bar"
      />
    </StyledDiv>
  </Section>
);

export default Venue;
