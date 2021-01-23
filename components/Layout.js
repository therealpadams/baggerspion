import Footer from 'components/Footer'
import Menu from 'components/Menu'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <Menu />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    )
}