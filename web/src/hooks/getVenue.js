import { useStaticQuery, graphql } from 'gatsby';

export const getVenue = () => {
  const { allSanityVenue } = useStaticQuery(
    graphql`
      query Venue {
        allSanityVenue(filter: { active: { eq: true } }, limit: 1) {
          edges {
            node {
              id
              mapLink
              name
              description
              address {
                building
                postcode
                street
                town
              }
              image {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    `
  );
  return allSanityVenue.edges;
};
