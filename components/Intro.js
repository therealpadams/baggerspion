import Container from 'components/Container'

export default function Intro() {
    return (
        <section className="flex flex-col pt-12 pb-6">
            <Container>
                <h2>Welcome to Baggerspion.</h2>
                <span className="text-4xl font-bold">Engineering Leadership &amp; Culture.</span>
                <p className="mt-4">
                You've stumbled upon the blog of Paul Adams. Sorry about that. 
                I'm a broadly-experienced (read: "expert in nothing") engineering 
                leader based in Berlin. When I make the effort to write, I mostly 
                write about engineering topics I care about. Very ocasionally, 
                you might catch me writing about my life in Germany.
                </p>
            </Container>
        </section>
    )
}