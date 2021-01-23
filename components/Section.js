export default function Section({ children, title }) {
    return (
        <section className="flex flex-col px-6 md:px-12 pt-4 pb-6 md:pb-12">
            <div className="flex flex-row justify-center items-center pb-8">
                <div style={{height: '1px'}} className="bg-black flex-grow"></div>
                <h2 className="text-center uppercase tracking-wider px-10">{title}</h2>
                <div style={{height: '1px'}} className="bg-black flex-grow"></div>
            </div>
           {children}
        </section>
    )
}