import { useStaticQuery, graphql } from 'gatsby';

export const getFeaturedEvent = () => {
  const { sanityEvent } = useStaticQuery(
    graphql`
      query FeaturedEvent {
        sanityEvent(featuredEvent: { eq: true }) {
          id
          name
          ticketLink
          eventDate(formatString: "MMMM Do YYYY")
          _rawIntroduction
          talks {
            _key
            _rawSynopsis
            title
            speaker {
              name
            }
          }
          venue {
            name
            address {
              town
            }
          }
        }
      }
    `
  );
  return sanityEvent;
};
