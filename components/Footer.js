export default function Footer() {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-8 mx-auto max-w-7xl sm:px-16 text-sm">
                <div className="space-y-4">
                    <h5 className="uppercase font-bold">Support</h5>
                    <p>Help Center</p>
                    <p>AirCover</p>
                    <p>Safety information</p>
                    <p>Supporting people with disabilities</p>
                    <p>Cancellation options</p>
                    <p>Our COVID-19 Response</p>
                    <p>Report a neighborhood concern</p>
                </div>
                <div className="space-y-4">
                    <h5 className="uppercase font-bold">Community</h5>
                    <p>Airbnb.org: disaster relief housing </p>
                    <p>Support Afghan refugees</p>
                    <p>Combating discrimination</p>
                </div>
                <div className="space-y-4">
                    <h5 className="uppercase font-bold">Hosting</h5>
                    <p>Try hosting</p>
                    <p>AirCover for Hosts</p>
                    <p>Explore hosting resources</p>
                    <p>Visit our community forum</p>
                    <p>How to host responsibly</p>
                </div>
                <div className="space-y-4">
                    <h5 className="uppercase font-bold">Airbnb</h5>
                    <p>Newsroom </p>
                    <p>Learn about new features</p>
                    <p>Letter from our founders</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Gift cards</p>
                </div>
            </div>
            <div className="mt-5 px-8 mx-auto max-w-7xl sm:px-16 text-sm">
                <div className="border-t-2 border-gray-300 flex flex-col sm:flex-row justify-between items-center pt-4">
                    <div className="space-x-2">
                        <span>© 2022 Airbnb, Inc.</span>
                        <button>Privacy</button>
                        <span>·</span>
                        <button>Terms</button>
                        <span>·</span>
                        <button>Sitemap</button>
                        <span>·</span>
                    </div>
                    <div className="space-x-2 pt-5 sm:pt-0">
                        <button>English (US)</button>
                        <button>$ USD</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
