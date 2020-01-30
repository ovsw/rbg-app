export const websiteSchema = {
  '@context': 'http://www.schema.org',
  '@type': 'WebSite',
  name: 'Raben Glass - Mesa Glass Repair and Replacement',
  alternateName: 'Raben Glass - Mesa Glass Repair and Replacement',
  url: 'https://www.rabenglass.com/',
}

export const localBusinessSchema = {
  '@context': 'http://schema.org',
  '@type': 'LocalBusiness',
  name: 'Raben Glass',
  telephone: '1 (800) 966-1406',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ' 1826 W Broadway #25',
    addressLocality: ' Mesa',
    addressRegion: 'AZ',
    addressCountry: 'USA',
    postalCode: '85202',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: {
        '@type': 'DayOfWeek',
        name: 'Monday',
      },
      opens: '9:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: {
        '@type': 'DayOfWeek',
        name: 'Tuesday',
      },
      opens: '9:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: {
        '@type': 'DayOfWeek',
        name: 'Wednesday',
      },
      opens: '9:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: {
        '@type': 'DayOfWeek',
        name: 'Thursday',
      },
      opens: '9:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: {
        '@type': 'DayOfWeek',
        name: 'Friday',
      },
      opens: '9:00',
      closes: '17:00',
    },
  ],

  url: 'https://www.rabenglass.com/',
}

// export const professionalServiceSchema = {
//   '@context': 'http://www.schema.org',
//   '@type': 'professionalService',
//   name: ' Authentic Neapolitan Wood Fired Pizza Truck',
//   url: 'https://www.corvobianco.pizza/',
//   logo: 'https://www.corvobianco.pizza/static/corvo-bianco-logo-badge-f42681d147c48f733ea532da6e68edf1.png',
//   image: 'https://www.corvobianco.pizza/static/farine-caputo-logo-bd10aa853818d03f25c8f865cc684508.png',
//   alternateName: 'Authentic Neapolitan Wood Fired Pizza Truck',
//   priceRange: 'Affordable',
//   telephone: '(914)733 2475',
//   description:
//     "Ready in 3 minutes or less! The Wood-fired oven is crazy-hot. Pies are done in about 3 minutes or less. Best enjoyed fresh from the oven or re-heated beforehand, if you're looking for that crispy goodness! Charred spots are good!   Due to the high heat, the crust will have dark spots - like a leopard :) This is not only normal but also desirable, as it adds to the flavor. 1 Pizza serves 1 Person. Smaller than the normal pizza, one pizza/person is the average portion... unless you have a gigantic appetite - in which case, get two :) Fold 2 Hold (and eat). Your call: fold the whole pizza to eat on the go like a savage, or sit down with cutlery like a civilized human. ONLY Premium Ingredients Fior di Latte Mozzarella made daily, authentic imported San Marzano Tomatoes, Caputo 00 Flour, Italian Sea Salt, Organic Fresh, Non-GMO Local ingredients ... A healthier Balance Zero sugar. Suitable even for gluten-sensitive people. A careful balance among crust, sauce, and cheese allows you to savor all 3 components.",
//   address: {
//     '@type': 'PostalAddress',
//     addressCountry: 'USA',
//   },
//   aggregateRating: {
//     '@type': 'AggregateRating',
//     ratingValue: '5',
//     bestRating: '5',
//     worstRating: '1',
//     reviewCount: '06',
//   },
//   openingHoursSpecification: [
//     {
//       '@context': 'https://schema.org',
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: 'Saturday',
//       opens: '24 hours',
//     },
//     {
//       '@context': 'https://schema.org',
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: 'Sunday',
//       opens: '24 hours',
//     },

//     {
//       '@context': 'https://schema.org',
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: 'Monday',
//       opens: '24 hours',
//     },
//     {
//       '@context': 'https://schema.org',
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: 'Tuesday',
//       opens: '24 hours',
//     },
//     {
//       '@context': 'https://schema.org',
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: 'Wednesday',
//       opens: '24 hours',
//     },
//     {
//       '@context': 'https://schema.org',
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: 'Thursday',
//       opens: '24 hours',
//     },
//     {
//       '@context': 'https://schema.org',
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: 'Friday',
//       opens: '24 hours',
//     },
//   ],
//   sameAs: [
//     'info@corvobianco.pizza',
//     'https://www.instagram.com/corvobianco.pizza/',
//     'https://twitter.com/CorvoPizza',
//     'https://www.facebook.com/corvobianco.pizza/',
//   ],
//   geo: {
//     '@type': 'GeoCoordinates',
//     latitude: '39.7837304',
//     longitude: '-100.4458825',
//   },
// }

// export const breadCrumbsList = {
//   '@context': 'http://schema.org',
//   '@type': 'BreadcrumbList',
//   itemListElement: [
//     {
//       '@type': 'ListItem',
//       position: 1,
//       item: {
//         '@id': 'https://www.corvobianco.pizza/',
//         name: 'Home',
//       },
//     },
//     {
//       '@type': 'ListItem',
//       position: 2,
//       item: {
//         '@id': 'https://www.corvobianco.pizza/menu/',
//         name: 'menu',
//       },
//     },
//     {
//       '@type': 'ListItem',
//       position: 2,
//       item: {
//         '@id': 'https://www.corvobianco.pizza/about',
//         name: 'About Us',
//       },
//     },
//     {
//       '@type': 'ListItem',
//       position: 2,
//       item: {
//         '@id': 'https://www.corvobianco.pizza/events',
//         name: 'Events',
//       },
//     },
//     {
//       '@type': 'ListItem',
//       position: 2,
//       item: {
//         '@id': 'https://www.corvobianco.pizza/news',
//         name: 'News',
//       },
//     },
//     {
//       '@type': 'ListItem',
//       position: 2,
//       item: {
//         '@id': 'https://www.corvobianco.pizza/reviews',
//         name: 'Reviews',
//       },
//     },
//     {
//       '@type': 'ListItem',
//       position: 2,
//       item: {
//         '@id': 'https://www.corvobianco.pizza/contact',
//         name: 'Contact',
//       },
//     },
//   ],
// }

// export const organizationSchema = {
//   '@context': 'http://schema.org',
//   '@type': 'Organization',
//   url: 'https://www.corvobianco.pizza/',
//   logo: 'https://www.corvobianco.pizza/static/corvo-bianco-logo-badge-f42681d147c48f733ea532da6e68edf1.png',
// }

// export const reviewSchema = {
//   '@context': 'http://schema.org',
//   '@type': 'Review',
//   itemReviewed: {
//     '@type': 'Organization',
//     name: 'Authentic Neapolitan Wood Fired Pizza Truck',
//   },
//   reviewRating: {
//     '@type': 'Rating',
//     ratingValue: '5',
//     bestRating: '5',
//     worstRating: '1',
//   },
//   name: 'Cindy C',
//   author: {
//     '@type': 'Person',
//     name: 'Cindy C',
//   },
//   reviewBody:
//     'It is so much more than just a pizza. The flavor of the homemade sauce and mozzarella reminds me of being in Italy. Corvo Bianco nailed the dough, it is full of flavor and texture that keeps me going back for another slice!I would give Corvo Bianco a 10 out of 10 on being authentic. I look forward to going back and getting more pizza and seeing what else they can stir up in the kitchen because I will be in line for it!',
//   datePublished: '2020-10-26',
//   publisher: {
//     '@type': 'Organization',
//     name: 'Authentic Neapolitan Wood Fired Pizza Truck',
//   },
// }
