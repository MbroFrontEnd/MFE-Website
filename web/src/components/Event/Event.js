import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledArticle = styled.article`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledH4 = styled.h4`
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  color: ${props => props.theme.text.color};
`;

const StyledH5 = styled.h5`
  margin: 0 0 16px 0;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;

const Event = ({ title = '', speaker = null, children }) => {
  return (
    <StyledArticle>
      <StyledH4>{title}</StyledH4>
      {speaker && <StyledH5>{speaker}</StyledH5>}
      {children}
    </StyledArticle>
  );
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
  speaker: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Event;
