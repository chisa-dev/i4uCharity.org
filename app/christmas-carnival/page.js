'use client'
import Layout from "@/components/layout/Layout";

export default function Home() {
  const photos = [
    { src: "assets/images/carnival/photo_2022-04-21_00-24-02.jpg", subtitle: "Christmas Carnival" },
    { src: "assets/images/carnival/photo_2022-04-21_00-24-03.jpg", subtitle: "Christmas Carnival" },
    { src: "assets/images/carnival/photo_2022-04-21_00-23-57.jpg", subtitle: "Christmas Carnival" },
    { src: "assets/images/carnival/photo_2023-01-04_21-02-59.jpg", subtitle: "Christmas Carnival" },
    { src: "assets/images/carnival/photo_2023-01-04_21-02-55.jpg", subtitle: "Christmas Carnival" },
    { src: "assets/images/carnival/photo_2024-01-06_19-22-39.jpg", subtitle: "Christmas Carnival" },
  ];

  return (
    <>
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Christmas Carnival" image="assets/images/carnival/photo_2022-04-21_00-24-05.jpg">
                   {/*volunteer Details background Start*/}
                   <section className="volunteer-details__background">
    <div className="container">
        <div className="volunteer-details__background__Inner">
            <h4 className="volunteer-details__background__heading">Christmas carnival: Sharing the Joy of Christ</h4>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                <p className="volunteer-details__background__text">
                    Every year, i4u organizes a Christmas carnival at Kilinto Primary School to bring the joy of the season to children from low-income families. Through this initiative, we aim to embody the love of Christ by creating a day filled with celebration, kindness, and hope for over 50 children who might not otherwise experience the blessings of Christmas.
                </p>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                <h4 className="volunteer-details__background__title">Our Purpose</h4>
                <ul className="volunteer-details__background__list">
                    <li>Bring the true spirit of Christmas to children in need.</li>
                    <li>Inspire fellowship members and sponsors to embrace generosity.</li>
                    <li>Build a culture of giving that reflects Christ’s ultimate gift.</li>
                </ul>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                <h4 className="volunteer-details__background__title">How We Prepare</h4>
                <ul className="volunteer-details__background__list">
                    <li>Partnering with Kilinto Primary School to identify children in need and secure the event venue.</li>
                    <li>Mobilizing resources within the fellowship through small groups. Each group raises funds, selects gifts from pre-prepared packages, and wraps them with care.</li>
                    <li>Reaching out to local businesses for sponsorships in the form of school supplies, books, and other items.</li>
                    <li>Purchasing and preparing all necessary supplies, ensuring every detail is handled with love and prayer.</li>
                </ul>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <h4 className="volunteer-details__background__title">Event Day</h4>
                <p className="volunteer-details__background__text">
                    On the day of the event, the school compound transforms into a joyful celebration filled with games, snacks, songs, storytelling, and drama performances. Each activity is designed to bring laughter and joy while pointing back to the heart of Christmas: God’s love for humanity through Jesus Christ. The highlight of the day is the gift-giving ceremony, where each child receives a beautifully wrapped present as a tangible expression of love and care.
                </p>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                <h4 className="volunteer-details__background__title">Impact So Far</h4>
                <ul className="volunteer-details__background__list">
                    <li>Shared the joy of Christmas with over 50 children annually.</li>
                    <li>Strengthened partnerships with Kilinto Primary School and local businesses.</li>
                    <li>United fellowship members in service and generosity.</li>
                    <li>Inspired a lasting impact on the lives of children and families.</li>
                </ul>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
                <h4 className="volunteer-details__background__title">Looking Ahead</h4>
                <p className="volunteer-details__background__text">
                    Looking ahead, we hope to:
                    <ul>
                        <li>Reach more children and families in need, expanding the event’s impact.</li>
                        <li>Encourage participants to adopt a lifestyle of giving and generosity.</li>
                        <li>Enrich the carnival’s spiritual focus, ensuring the message of Christ remains central.</li>
                        <li>Strengthen our partnerships to sustain and grow this ministry.</li>
                    </ul>
                </p>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                <h4 className="volunteer-details__background__title">Join Us in Ministry</h4>
                <p className="volunteer-details__background__text">
                    By God’s grace, the Christmas carnival has become a beacon of hope, reminding us of the joy and light Christ brings to the world. Join us in continuing this mission to share His love with the little ones He holds so dear.
                </p>
            </div>
        </div>
    </div>
</section>

        {/* Volunteer Details Background End */}
        
        {/* Volunteer Page Start */}
        <section className="volunteer-page">
          <div className="container">
            <div className="row">
              {photos.map((photo, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src={photo.src} alt={`Christmas Carnival ${index + 1}`} className="fixed-size-img" />
                      </div>
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__name-box">
                        <p className="team-one__sub-title">{photo.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Volunteer Page End */}
        
      </Layout>
    </>
  )
}
