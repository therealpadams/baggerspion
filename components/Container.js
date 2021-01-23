export default function Container({ children }) {
    return (
        <div className="w-full">
            <div className="px-6 prose mx-auto">
                {children}
            </div>
        </div>
    )
}