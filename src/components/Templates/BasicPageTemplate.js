import React from 'react'
import styled from 'styled-components'
import PageHeading from '../PageHeading'
import TextBlock from '../contentBlocks/TextBlock'
import ImageBlock from '../contentBlocks/ImageBlock'
import Sidebar from '../Sidebar/Sidebar'

const ContentWrapper = styled.article`
  border-right: 2px solid ${props => props.theme.accentColor};
`
const Content = styled.div`
  padding-top: 0 !important;
`

const BasicPageTemplate = ({ data: { title, body } }) => (
  <>
    <PageHeading title={title} />

    <section className="ls section_padding_top_100 section_padding_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-md-8 col-lg-9">
            <ContentWrapper className="single-post vertical-item content-padding  bottom_color_border  overflow_hidden">
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
                  <p>
                    Rump tongue salami beef meatloaf doner. Sirloin burgdoggen pastrami, ground round brisket t-bone
                    boudin biltong pork belly leberkas. Ham bresaola tenderloin shank. Ham salami kevin beef rump filet
                    mignon sirloin tail sausage capicola venison short loin brisket pancetta pork chop. Ham hock
                    andouille strip steak chuck turducken cow. Ham hock porchetta pastrami flank, tongue jerky pork
                    belly leberkas.
                  </p>
                  <p>
                    Fatback short loin cow ribeye spare ribs chuck bresaola jowl brisket kielbasa tenderloin rump
                    turducken. Venison alcatra spare ribs tongue doner. Alcatra pork loin bacon picanha pig. Meatloaf
                    jerky ham andouille alcatra, drumstick tail. Ham hock meatball alcatra porchetta chicken, ball tip
                    frankfurter jowl leberkas. Tail landjaeger flank chicken pork chop biltong brisket beef ribs cow.
                    Alcatra pork chop fatback bacon venison short loin chuck pork andouille ground round turducken.
                  </p>
                  <blockquote className="text-center">
                    «I have schedule my replacement glass w/ and other company, they did not bother to call and
                    reschedule, I call ClearView not only they help me the same day, in and out of there shop in lest
                    then 1hr, excellent services, and most important, price.»
                    <div className="item-meta">
                      <h5>Josephine Edwards</h5>
                      <span className="small-text highlight">client</span>
                    </div>
                  </blockquote>
                  <p>
                    Leberkas venison sirloin andouille, drumstick filet mignon boudin hamburger pastrami pork chop
                    ribeye bresaola ball tip. Alcatra turducken flank sirloin beef t-bone venison ball tip cow.
                    Porchetta kevin hamburger chuck. Porchetta doner drumstick, short ribs ham hock short loin salami
                    filet mignon jowl pork chop swine bresaola cow picanha. Jowl venison swine corned beef.
                  </p>
                  <ul className="list2 grey regular">
                    <li>Brisket doner meatloaf turducke</li>
                    <li>Pancetta landjaeger alcatra groun</li>
                    <li>Round pork turkey boudin shank</li>
                  </ul>
                  <p>
                    <img className="alignleft" src="images/side-image.jpg" alt="" /> Sirloin flank pancetta, kevin pork
                    chop pork belly burgdoggen t-bone leberkas jowl chuck biltong meatball chicken doner.
                  </p>
                  <p>
                    Shoulder turducken andouille hamburger chicken. Short loin chuck fatback rump short ribs pancetta
                    brisket ball tip capicola strip steak t-bone bresaola landjaeger ribeye. Bresaola pork belly ball
                    tip spare ribs flank kielbasa drumstick porchetta turkey pork loin doner sausage.
                  </p>
                  <p>
                    Frankfurter tail tongue drumstick andouille short ribs turkey ham hock meatball short loin salami
                    turducken rump jerky bresaola. Tri-tip pastrami short loin pork belly jowl andouille brisket
                    sausage.
                  </p>
                  <p>
                    Swine jerky pork chop pork loin capicola. Tail filet mignon meatloaf pig turkey, boudin jerky
                    biltong sausage chuck picanha ham hock. Bacon meatloaf short ribs.
                  </p>
                  <p>
                    Alcatra shank corned beef, sausage tri-tip pig boudin beef ribs meatloaf salami tenderloin brisket.
                    Meatball rump ribeye alcatra tongue jowl. Picanha pastrami bresaola sausage andouille venison ribeye
                    short loin.
                  </p>
                </div>
              </Content>
            </ContentWrapper>
          </div>

          <Sidebar />
        </div>
      </div>
    </section>
  </>
)

export default BasicPageTemplate
