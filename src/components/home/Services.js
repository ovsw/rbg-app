import React from 'react'
import ServicesListing from '../ServicesListing'
import HpHeading from './HpHeading'

const Services = ({ title, subtitle, theme, services }) => (
  <section className={`ms section_padding_top_100 section_padding_bottom_100 ${theme}`}>
    <div className="container">
      <HpHeading title={title} subtitle={subtitle} />
      <ServicesListing category={subtitle} services={services} />
    </div>
  </section>
)

export default Services
