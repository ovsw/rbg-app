import React from 'react'
import styled from 'styled-components'
import ResponsiveEmbed from 'react-responsive-embed'

const MapContainer = styled.div`
  margin-top: 2rem;
`

const Map = () => (
  <MapContainer>
    <ResponsiveEmbed
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3323.6910983987605!2d-112.00899409087677!3d33.58736875568819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bb15020932e93%3A0xbf77e44e32e7fd80!2sRaben+Glass+LLC!5e0!3m2!1sen!2sro!4v1558706461316!5m2!1sen!2sro"
      allowFullScreen
      ratio="4:3"
    />
  </MapContainer>
)
export default Map
