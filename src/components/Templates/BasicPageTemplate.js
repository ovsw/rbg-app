import React from 'react'
import styled from 'styled-components'
import PageHeading from '../PageHeading'
import MainContentWrapper from '../common/MainContentWrapper'
import TextBlock from '../contentBlocks/TextBlock'
import ImageBlock from '../contentBlocks/ImageBlock'
import VideoBlock from '../contentBlocks/VideoBlock'
import Sidebar from '../Sidebar/Sidebar'
import MapContact from '../MapContact'

const BasicPageTemplate = ({ data: { title, body, headerImage, coverImage, embedCodes }, map, contactForm }) => {
  const pageHeaderImage = headerImage || coverImage

  return (
    <>
      <PageHeading title={title} image={pageHeaderImage} />

      <section className="ls section_padding_top_100 section_padding_bottom_100">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
              <MainContentWrapper>
                <div className="entry-content">
                  {body &&
                    body.map(block => (
                      <div key={block.id}>
                        {block.model.apiKey === 'text_block' && <TextBlock block={block} />}
                        {block.model.apiKey === 'image_block' && <ImageBlock block={block} />}
                        {/* {block.model.apiKey === 'quote' && <QuoteBlock block={block} />} */}
                        {block.model.apiKey === 'youtube_video' && <VideoBlock block={block} />}
                      </div>
                    ))}
                </div>
                {embedCodes && (
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: embedCodes,
                      }}
                    />
                  </>
                )}
                {map && <MapContact />}
              </MainContentWrapper>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  )
}

export default BasicPageTemplate
