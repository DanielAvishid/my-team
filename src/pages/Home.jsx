import { ContactUs } from '../cmps/ContactUs'
import { Hero } from '../cmps/Hero'
import { MoreDetails } from '../cmps/MoreDetails'
import { Testimonial } from '../cmps/Testimonial'

export function Home() {
    return (
        <main className='main-layout full'>
            <Hero />
            <MoreDetails />
            <Testimonial />
            <ContactUs />
        </main>
    )
}