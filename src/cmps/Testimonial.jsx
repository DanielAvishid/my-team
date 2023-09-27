import quotesUrl from '../assets/img/quotes.png'
import avatar1Url from '../assets/img/avatar1.png'
import avatar2Url from '../assets/img/avatar2.png'
import avatar3Url from '../assets/img/avatar3.png'

export function Testimonial() {
    return (
        <section className="testimonial-container main-layout full">
            <div className="testimonial">
                <h2>
                    Delivering real results for top <br></br> companies. Some of our success stories.
                </h2>
                <section className="quotes flex gap30">
                    <div>
                        <img src={quotesUrl} alt="" />
                        <p>
                            “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
                        </p>
                        <h3>
                            Kady Baker
                        </h3>
                        <div>
                            <span>
                                Product Manager at Bookmark
                            </span>
                        </div>
                        <img src={avatar1Url} alt="" />
                    </div>
                    <div>
                        <img src={quotesUrl} alt="" />
                        <p>
                            “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
                        </p>
                        <h3>
                            Aiysha Reese
                        </h3>
                        <div>
                            <span>
                                Founder of Manage
                            </span>
                        </div>
                        <img src={avatar2Url} alt="" />
                    </div>
                    <div>
                        <img src={quotesUrl} alt="" />
                        <p>
                            “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
                        </p>
                        <h3>
                            Arthur Clarke
                        </h3>
                        <div>
                            <span>
                                Co-founder of MyPhysio
                            </span>
                        </div>
                        <img src={avatar3Url} alt="" />
                    </div>
                </section>
            </div>
        </section>
    )
}