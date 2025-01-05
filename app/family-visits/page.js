'use client'
import Layout from "@/components/layout/Layout";

export default function Home() {
  const photos = [
    { src: "assets/images/family-visit/photo_2025-01-04_12-24-19.jpg", subtitle: "Family Visit Purchasing Asbeza" },
    { src: "assets/images/family-visit/photo_2025-01-04_12-23-35.jpg", subtitle: "Family Visit Purchasing Asbeza" },
    { src: "assets/images/family-visit/photo_2025-01-04_12-42-38 (2).jpg", subtitle: "Birthday Celebration" },
    { src: "assets/images/family-visit/photo_2025-01-04_12-42-38.jpg", subtitle: "Birthday Celebration" },
    { src: "assets/images/family-visit/photo_2025-01-04_12-37-47.jpg", subtitle: "Family Visit Purchasing Asbeza" },
    { src: "assets/images/family-visit/photo_2025-01-04_12-31-16.jpg", subtitle: "Family Visit Time with the Kids" },
  ];

  return (
    <>
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Family Visits Ministry" image="assets/images/family-visit/photo_2025-01-04_12-46-36.jpg">
           
              {/*volunteer Details background Start*/}
              <section className="volunteer-details__background"> 
    <div className="container">
        <div className="volunteer-details__background__Inner">
            <h4 className="volunteer-details__background__heading">Family Visits Ministry: Living Out Christ’s Love in Action</h4>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                <p className="volunteer-details__background__text">
                    At i4u, our family visits ministry is a reflection of Christ’s love and compassion in action. Every two weeks, we visit three single mothers, each raising three children under difficult financial circumstances. Our mission extends beyond providing material support—we aim to be like close family, sharing in their burdens and joys, praying for them.
                </p>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                <h4 className="volunteer-details__background__title">Our Vision</h4>
                <ul className="volunteer-details__background__list">
                    <li>Build a network of love and support where no family feels forgotten or alone.</li>
                    <li>Equip single mothers and their children with physical needs, such as groceries, school supplies, and medical care.</li>
                    <li>Provide children with tutoring and learning resources to help them excel and break the cycle of poverty.</li>
                    <li>Walk alongside these families as caring companions, sharing their challenges and pointing them to Christ.</li>
                    <li>Grow our ministry to serve more families in need, trusting God’s provision.</li>
                    <li>Encourage community involvement to transform lives together.</li>
                </ul>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                <h4 className="volunteer-details__background__title">How We Serve</h4>
                <ul className="volunteer-details__background__list">
                    <li>Spend time with families, understanding their struggles and offering personalized support.</li>
                    <li>Deliver groceries and necessities biweekly to ease financial burdens.</li>
                    <li>Invest in children’s education through tutoring and school supplies.</li>
                    <li>Provide emotional, spiritual, and healthcare support for families.</li>
                </ul>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <h4 className="volunteer-details__background__title">Looking Ahead</h4>
                <p className="volunteer-details__background__text">
                    With faith in God’s provision, we aim to expand our reach, serve more families, introduce structured tutoring programs, and support mothers with skill-building initiatives for financial stability.
                </p>
            </div>
            <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                <h4 className="volunteer-details__background__title">Join Us in Ministry</h4>
                <p className="volunteer-details__background__text">
                    Through your prayers, contributions, or volunteer efforts, you can help us make a lasting impact. *“Carry each other’s burdens, and in this way, you will fulfill the law of Christ”* (Galatians 6:2).
                </p>
            </div>
        </div>
    </div>
</section>

        {/* Volunteer Page Start */}
        <section className="volunteer-page">
          <div className="container">
            <div className="row">
              {photos.map((photo, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src={photo.src} alt={`Family Visit ${index + 1}`} className="fixed-size-img" />
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
