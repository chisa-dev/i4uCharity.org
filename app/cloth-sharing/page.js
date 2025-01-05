'use client'
import Layout from "@/components/layout/Layout";

export default function Home() {
  const photos = [
    { src: "assets/images/cloth-sharing/photo_2025-01-04_11-59-38.jpg", subtitle: "Cloth Sharing Day" },
    { src: "assets/images/cloth-sharing/photo_2025-01-04_11-59-39 (2).jpg", subtitle: "Cloth Sharing Day" },
    { src: "assets/images/cloth-sharing/photo_2025-01-04_11-59-40.jpg", subtitle: "Cloth Sharing Day" },
    { src: "assets/images/cloth-sharing/photo_2025-01-04_11-59-41.jpg", subtitle: "Cloth Sharing Day" },
    { src: "assets/images/cloth-sharing/photo_2025-01-04_11-59-41 (6).jpg", subtitle: "Cloth Sharing Day" },
    { src: "assets/images/cloth-sharing/photo_2025-01-04_11-59-41 (8).jpg", subtitle: "Cloth Sharing Day" },
  ];

  return (
    <>
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Cloth Sharing" image="assets/images/cloth-sharing/photo_2025-01-04_11-59-37.jpg">
     
        <section className="volunteer-details__background">
          <div className="container">
            <div className="volunteer-details__background__Inner">
              <h4 className="volunteer-details__background__heading">Cloth Sharing: Extending Love Through Warmth</h4>

              <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                <p className="volunteer-details__background__text">
                  At i4u, we believe that the love of Christ is not just shown through words, but also through tangible acts of kindness. Our Cloth Sharing event, held annually at the end of the academic year, is a special time when we come together to serve those in need. This event is dedicated to collecting, cleaning, and distributing clothes to those who are less fortunate, especially individuals living on the streets.
                </p>
              </div>

              <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                <h4 className="volunteer-details__background__title">Our Purpose</h4>
                <ul className="volunteer-details__background__list">
                  <li>Provide for the Needy: Offer clothes to those living on the streets, providing them with warmth and dignity.</li>
                  <li>Demonstrate Christ’s Love: Serve others in a practical way, embodying Christ’s call to love and care for the less fortunate.</li>
                  <li>Inspire Generosity: Encourage fellowship members to be generous and mindful of the needs of others, cultivating a spirit of giving.</li>
                  <li>Build Community Impact: Unite as a fellowship to serve others, strengthening our bond and our collective impact in the community.</li>
                </ul>
              </div>

              <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                <h4 className="volunteer-details__background__title">How We Make It Happen</h4>
                <ul className="volunteer-details__background__list">
                  <li>Collection: Fellowship members collect gently used clothes dorm by dorm, gathering a wide variety of clothing items that can be used by those in need.</li>
                  <li>Washing and Sorting: We come together to wash and sort the clothes, ensuring that they are clean and ready to be distributed.</li>
                  <li>Distribution: We then organize a distribution day, where the clothes are given out to individuals in the community who are homeless or in need of clothing.</li>
                  <li>Spreading Warmth and Care: During the distribution, we not only provide clothes but also offer prayers, encouragement, and the message of God’s love.</li>
                </ul>
              </div>

              <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <h4 className="volunteer-details__background__title">What We’ve Accomplished</h4>
                <ul className="volunteer-details__background__list">
                  <li>Collected and distributed hundreds of clothing items to those in need, providing comfort and warmth.</li>
                  <li>Built a sense of community within our fellowship as we work together to serve others.</li>
                  <li>Demonstrated Christ’s love to the homeless and less fortunate, offering them more than just material support but also hope and encouragement.</li>
                  <li>Inspired generosity among fellowship members, who have taken ownership in serving the less fortunate in a practical way.</li>
                </ul>
              </div>

              <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                <h4 className="volunteer-details__background__title">Looking Ahead</h4>
                <p className="volunteer-details__background__text">
                  In the future, we hope to:
                  <ul>
                    <li>Expand the Reach: Increase the number of clothes collected and distributed, impacting more individuals in need.</li>
                    <li>Enhance the Event: Include additional support services during the distribution, such as providing food, hygiene kits, or other essentials.</li>
                    <li>Strengthen Our Partnership: Build relationships with local shelters and community groups to extend the impact of the event.</li>
                    <li>Inspire a Lifestyle of Giving: Encourage fellowship members to engage in regular acts of kindness, fostering a culture of generosity that extends beyond the Cloth Sharing event.</li>
                  </ul>
                </p>
              </div>

              <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
                <h4 className="volunteer-details__background__title">Join Us in Ministry</h4>
                <p className="volunteer-details__background__text">
                  The Cloth Sharing event is a powerful reminder that even the smallest acts of kindness can make a significant difference in someone’s life. Through this event, we aim to reflect Christ’s love by providing not only clothing but also a sense of dignity and hope to those in need.
                </p>
                <p className="volunteer-details__background__text">
                  "I was naked and you clothed me, I was sick and you looked after me..." (Matthew 25:36)
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
                        <img src={photo.src} alt={`Cloth Sharing Day ${index + 1}`} className="fixed-size-img" />
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
