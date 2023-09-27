import logoUrl from '../assets/img/logo.svg'

export function AppFooter() {
    return (
        <section className="app-footer-container main-layout full">
            <div className="app-footer flex">
                <div className="logo">
                    <img src={logoUrl} alt="" />
                </div>
                <nav>
                    <ul className='clean-list flex gap40'>
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                    </ul>
                </nav>
                <div>
                    <p>
                        987  Hillcrest Lane
                        Irvine, CA
                        California 92714
                        Call Us : 949-833-7432
                    </p>
                </div>
                <div>
                    <h1>HII</h1>
                </div>
            </div>
        </section>
    )
}