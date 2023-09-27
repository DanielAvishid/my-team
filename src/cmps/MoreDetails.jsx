import lineSecondary from '../assets/img/line-secondary.png'
import personUrl from '../assets/img/icon-person.svg'
import cogUrl from '../assets/img/icon-cog.svg'
import chartUrl from '../assets/img/icon-chart.svg'
import moreDetailsUrl from '../assets/img/more-details-img.svg'

export function MoreDetails() {
    return (
        <section className="more-details-container main-layout full">
            <img className='bg-img' src={moreDetailsUrl} alt="" />
            <div className='more-details flex space-between'>
                <div className='title-container'>
                    <img className='line' src={lineSecondary} alt="" />
                    <h2>Build & manage distributed teams like no one else.</h2>
                </div>
                <div className='icons-container'>
                    <div className='icon-container flex'>
                        <img className='icon-img' src={personUrl} alt="" />
                        <div>
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>
                    <div className='icon-container flex'>
                        <img className='icon-img' src={cogUrl} alt="" />
                        <div>
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>
                    <div className='icon-container flex'>
                        <img className='icon-img' src={chartUrl} alt="" />
                        <div>
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}