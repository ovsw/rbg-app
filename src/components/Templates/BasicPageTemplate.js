import React from 'react'
import Layout from '../layout'
import PageHeading from '../PageHeading'

const BasicPageTemplate = ({ data: { title } }) => (
  <Layout>
    <PageHeading title={title} />
  </Layout>
)

export default BasicPageTemplate
