import React from 'react'
import Layout from '../layout'
import PageHeading from '../PageHeading'
import TextBlock from '../contentBlocks/TextBlock'
import Sidebar from '../Sidebar/Sidebar'

const BlogPostTemplate = ({ data: { title, body } }) => (
  <Layout>
    <PageHeading title={title} />

    <section className="ls section_padding_top_100 section_padding_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-md-8 col-lg-9">
            <article className="single-post vertical-item content-padding with_background post bottom_color_border rounded overflow_hidden">
              <div className="entry-thumbnail item-media">
                <img src="images/gallery/09.jpg" alt="" />
              </div>
              <div className="item-content">
                <header className="entry-header">
                  <div className="categories-links highlightlinks">
                    <a href="blog-right.html">Auto glass</a>
                  </div>
                </header>
                <div className="entry-content">
                  {body.map(block => (
                    <div key={block.id}>
                      {block.model.apiKey === 'text_block' && <TextBlock block={block} />}
                      {/* {block.model.apiKey === 'quote' && <QuoteBlock block={block} />}
                      {block.model.apiKey === 'image' && <ImageBlock block={block} />}
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
              </div>
              <footer className="entry-meta small-text greylinks">
                <div className="inline-content">
                  <a href="blog-single-right.html">
                    <time dateTime="2017-10-03T08:50:40+00:00"> 10.11.17</time>
                  </a>{' '}
                  <a href="blog-right.html"> Admin </a> <a href="blog-single-right.html">3</a>
                </div>
              </footer>
            </article>
            <article className="author-meta side-item side-md content-padding with_background rounded overflow_hidden">
              <div className="row">
                <div className="col-md-4">
                  <div className="item-media top_rounded overflow_hidden">
                    <img src="images/post_author.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="item-content">
                    <h4 className="bottommargin_0">Dean Massey</h4>
                    <p className="small-text highlight">Client</p>
                    <p>
                      Tail salami hamburger prosciutto shank sirloin biltong pig rump. Tail short ribs ball tip ground
                      round meatball frankfurter sirloin pancetta shank ribeye kevin.
                    </p>
                    <div> </div>
                  </div>
                </div>
              </div>
            </article>
            <div className="row columns_padding_5 page-nav">
              <div className="col-md-6">
                <div className="prev-item with_padding with_background bottom_color_border rounded overflow_hidden">
                  <div className="highlight small-text">Previous Article</div>
                  <h4 className="entry-title">
                    <a href="blog-single-left.html"> Doner cow swine tail meat ball pig shank filet </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="next-item with_padding with_background bottom_color_border rounded overflow_hidden text-right">
                  <div className="highlight small-text">Next Article</div>
                  <h4 className="entry-title">
                    <a href="blog-single-left.html"> Doner cow swine tail meat ball pig shank filet </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </section>
  </Layout>
)

export default BlogPostTemplate
