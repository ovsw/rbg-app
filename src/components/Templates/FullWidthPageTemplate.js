import React from 'react'
import styled from 'styled-components'
import PageHeading from '../PageHeading'
import TextBlock from '../contentBlocks/TextBlock'
import ImageBlock from '../contentBlocks/ImageBlock'
import Services from '../home/Services'

const Content = styled.div`
  padding-top: 0 !important;
`

const BasicPageTemplate = ({ pageData: { title, body, headerImage }, servicesData }) => (
  <>
    <PageHeading title={title} image={headerImage} />
    <Services theme="ls" title="Services" subtitle="Residential" services={servicesData} />
    <section className="ls section_padding_top_100 section_padding_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* <div className="entry-thumbnail item-media">
                <img src="images/gallery/09.jpg" alt="" />
              </div> */}
            <Content className="item-content">
              <div className="entry-content">
                {body.map(block => (
                  <div key={block.id}>
                    {block.model.apiKey === 'text_block' && <TextBlock block={block} />}
                    {block.model.apiKey === 'image_block' && <ImageBlock block={block} />}
                    {/* {block.model.apiKey === 'quote' && <QuoteBlock block={block} />}
                      {block.model.apiKey === 'video' && <VideoBlock block={block} />} */}
                  </div>
                ))}
              </div>
            </Content>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default BasicPageTemplate
