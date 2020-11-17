import Container from '../components/container'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Navbar from '../components/navbar'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Container>
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </Container>    
    </>
  )
}
