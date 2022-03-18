import { Contact } from '@features/home/components/Contact'
import { Features } from '@features/home/components/Features'
import { Hero } from '@features/home/components/Hero'
import { Layout } from '@components/common/Layout'
import { OurTeam } from '@features/home/components/OurTeam'
import { Partners } from '@features/home/components/Partners'
import { Testimonials } from '@features/home/components/Testimonials'
import { WhyChooseUs } from '@features/home/components/WhyChooseUs'

export const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Partners />
      <WhyChooseUs />
      <Features />
      <Testimonials />
      <OurTeam />
      <Contact />
    </Layout>
  )
}
