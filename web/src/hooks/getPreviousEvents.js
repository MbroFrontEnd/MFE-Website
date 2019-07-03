import { useStaticQuery, graphql } from 'gatsby';

export const getPreviousEvents = () => {
  const { allSanityEvent } = useStaticQuery(
    graphql`
      query PreviousEvents {
        allSanityEvent(filter: { eventDate: { lt: "2019-08-28" } }) {
          edges {
            node {
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
