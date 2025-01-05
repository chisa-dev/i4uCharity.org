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
                        <li><Link href="family-visits">Family Visits Ministry</Link>
                            
                        </li>
                        <li><Link href="christmas-carnival">Christmas Carnival</Link>
                        </li>
                        <li><Link href="cloth-sharing">Cloth Sharing</Link>
                        </li>
                        
                         
                    </ul>
                </li>
                <li>
                    <Link href="donation-details">Donation</Link>
                     
                </li>
               
                <li>
                    <Link href="stories">Stories</Link>
                     
                </li>
                <li>
                    <Link href="contact">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}
