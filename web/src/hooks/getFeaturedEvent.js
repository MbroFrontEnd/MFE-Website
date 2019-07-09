import { useStaticQuery, graphql } from 'gatsby';

export const getFeaturedEvent = () => {
  const { sanityEvent } = useStaticQuery(
    graphql`
      query FeaturedEvent {
        sanityEvent(featuredEvent: { eq: true }) {
          id
          name
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
        }
      }
    `
  );
  return sanityEvent;
};
