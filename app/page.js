
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home/About"
import Banner from "@/components/sections/home/Banner"
import Blog from "@/components/sections/home/Blog"
import Country from "@/components/sections/home/Country"
import Donation from "@/components/sections/home/Donation"
import Mission from "@/components/sections/home/Mission"
import Slogan from "@/components/sections/home/Slogan"
import Who from "@/components/sections/home/Who"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <About />
                <Slogan />
                <Mission />
                <Donation />
                <Who />
                <Blog />
                <Country />
            </Layout>
        </>
    )
}