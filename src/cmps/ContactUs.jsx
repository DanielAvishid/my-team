import contactUrl from '../assets/img/contact-us-img.svg'

export function ContactUs() {
    return (
        <section className="contact-us-container main-layout full">
            <div>
                <img src={contactUrl} alt="" />
            </div>
            <div className="flex space-between">
                <h2>Ready to get started?</h2>
                <button>contact us</button>
            </div>
        </section>
    )
}