
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home/About"
import Banner from "@/components/sections/home/Banner"
import Donation from "@/components/sections/home/Donation"
import Slogan from "@/components/sections/home/Slogan"
import Who from "@/components/sections/home/Who"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <About />
                <Slogan />
                {/* <Mission /> */}
                <Donation />
                <Who />
          
                {/* <Country /> */}
            </Layout>
        </>
    )
}