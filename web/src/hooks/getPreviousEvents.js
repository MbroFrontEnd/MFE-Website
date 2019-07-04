import { useStaticQuery, graphql } from 'gatsby';

export const getPreviousEvents = () => {
  const { allSanityEvent } = useStaticQuery(
    graphql`
      query PreviousEvents {
        allSanityEvent(filter: { featuredEvent: { eq: false } }) {
          edges {
            node {
              id
              name
              eventDate
              _rawIntroduction
            }
          }
        }
      }
    `
  );
  return allSanityEvent.edges;
};
