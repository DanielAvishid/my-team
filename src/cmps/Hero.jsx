import lineUrl from '../assets/img/hero-line.png'
import heroImgUrl from '../assets/img/hero-img.svg'

export function Hero() {
    return (
        <section className="hero-container main-layout full">
            <div className="hero flex">
                <h1>Find the <br></br> best <span>talent</span></h1>
                <div>
                    <img className='line-img' src={lineUrl} alt="" />
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
                <img className='hero-img' src={heroImgUrl} alt="" />
            </div>
        </section>
    )
}