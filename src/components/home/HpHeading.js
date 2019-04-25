import React from 'react'

const HpHeading = ({ title, subtitle }) => (
  <div className="row">
    <div
      className="col-lg-12  col-sm-12 col-xs-12 to_animate text-center animated expandOpen"
      data-animation="expandOpen"
    >
      <p className="small-text big highlight text-center">{subtitle}</p>
      <h2 className="section_header text-center">{title}</h2>
      <hr className="divider_60_2 main_bg_color" />
    </div>
  </div>
)

export default HpHeading
