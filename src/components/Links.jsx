function Links({ children }) {
    return (
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                <div class="basis-1/4">{children}</div>

            </div>
        </div>
    )
}
export default Links;