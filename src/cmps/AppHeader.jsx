import logoUrl from '../assets/img/logo.svg'

export function AppHeader() {
    return (
        <header className="app-header-container main-layout full">
            <div className="app-header flex space-between">
                <div className='flex align-center'>
                    <div className="logo">
                        <img src={logoUrl} alt="" />
                    </div>
                    <nav>
                        <ul className='clean-list flex gap40'>
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                        </ul>
                    </nav>
                </div>
                <button>contact us</button>
            </div>
        </header>
    )
}