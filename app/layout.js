import { dmSans, libreBaskerville } from "@/lib/font";
import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/style.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const metadata = {
    title: "I4U Charity Team | AASTU Christian Students Fellowship",
    description:
        "I4U Charity Team, a program by Addis Ababa Science and Technology University's Christian Students Fellowship, is dedicated to organizing charity and fundraising events to help those in need. Join us in making a difference with caring hearts and sharing hands.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${libreBaskerville.variable}`}>
            <head>
                {/* Meta tags for SEO */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="Charity, Donation, AASTU, I4U, Christian Students, Fundraising, Nonprofit, Helping Hands, Caring Hearts" />
                <meta name="author" content="I4U Charity Team" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content="/assets/images/charity-og-image.jpg" />
                <meta property="og:url" content="https://i4ucharity.org" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content="/assets/images/charity-twitter-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Robots */}
                <meta name="robots" content="index, follow" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://i4ucharity.org" />

                {/* Title */}
                <title>{metadata.title}</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
