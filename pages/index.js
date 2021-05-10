import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Sections/ServiceSection'
import Guarantee from '../components/Sections/Guarantee'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Guarantee />
    </Layout>
  )
}
