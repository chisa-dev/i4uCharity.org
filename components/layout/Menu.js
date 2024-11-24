import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Events</Link>
                    <ul className="shadow-box">
                        <li className="dropdown"><Link href="#">Volunteer</Link>
                            <ul>
                                <li><Link href="volunteer">Volunteer</Link></li>
                                <li><Link href="volunteer-carousel">Volunteer Carousel</Link>
                                </li>
                                <li><Link href="become-volunteer">Become Volunteer</Link></li>
                                <li><Link href="volunteer-details">Volunteer Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Events</Link>
                            <ul>
                                <li><Link href="events">Events</Link></li>
                                <li><Link href="events-carousel">Events Carousel</Link></li>
                                <li><Link href="events-list">Events List</Link></li>
                                <li><Link href="event-details">Event Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="projects">Projects</Link></li>
                        <li><Link href="project-details">Project Details</Link></li>
                        <li><Link href="cause-details">Cause Details</Link></li>
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="faq">FAQs</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="donation-details">Donation</Link>
                     
                </li>
               
                <li className="dropdown">
                    <Link href="#">Stories</Link>
                    <ul className="shadow-box">
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-carousel">Blog Carousel</Link></li>
                        <li><Link href="blog-list">Blog List</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}
