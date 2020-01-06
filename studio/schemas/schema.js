// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import event from './documents/event'
import page from './documents/page'
import person from './documents/person'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import talk from './documents/talk'
import venue from './documents/venue'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import seo from './objects/seo'
import twitter from './objects/twitter'
import advancedPortableText from './objects/advancedPortableText'
import simplePortableText from './objects/simplePortableText'
import address from './objects/address'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    seo,
    twitter,
    advancedPortableText,
    simplePortableText,
    talk,
    address,
    // The following are document types which will appear
    // in the studio.
    category,
    event,
    page,
    person,
    post,
    siteSettings,
    venue
  ])
})
