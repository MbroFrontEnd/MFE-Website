import { useStaticQuery, graphql } from 'gatsby';

export const getPreviousEvents = () => {
  const { allSanityEvent } = useStaticQuery(
    graphql`
      query PreviousEvents {
        allSanityEvent(
          filter: { featuredEvent: { eq: false } }
          sort: { fields: _createdAt, order: ASC }
          limit: 1
        ) {
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
