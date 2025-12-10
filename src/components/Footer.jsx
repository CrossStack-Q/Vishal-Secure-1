export default function Footer() {
  return (
    <footer className="w-full bg-[#111] text-gray-300 mt-20 pt-16 pb-10 px-6 sm:px-10 lg:px-20">

      {/* Top Section: Logo + Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

        {/* Left: Logo + Description */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
            <span className="text-white font-medium text-lg">designflow</span>
          </div>

          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            We craft high-performing, beautiful websites that are
            conversion-focused, brand-accurate, & people-friendly.
          </p>
        </div>

        {/* Right: Newsletter */}
        <div className="flex flex-col gap-4 max-w-md">
          <p className="text-sm uppercase tracking-wide text-gray-400">
            OUR NEWSLETTER
          </p>

          <h2 className="text-lg font-medium text-white leading-snug">
            Join 150K+ Designers For <br className="hidden sm:block" />
            Weekly Creative Insights
          </h2>

          {/* Email Input */}
          <div className="flex items-center gap-2 bg-[#1c1c1c] rounded-full px-4 py-2 border border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-1.5 rounded-full transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-800 my-12"></div>

      {/* Bottom Grid Links */}
      <div className="
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-5 
        gap-10 text-sm
      ">

        {/* Column 1 */}
        <div>
          <h3 className="text-gray-400 uppercase text-xs tracking-wide mb-4">
            OUR PAGES
          </h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Career</li>
            <li>Return</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-gray-400 uppercase text-xs tracking-wide mb-4">
            PRODUCT
          </h3>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-gray-400 uppercase text-xs tracking-wide mb-4">
            RESOURCES
          </h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-gray-400 uppercase text-xs tracking-wide mb-4">
            SUPPORT
          </h3>
          <ul className="space-y-2">
            <li>support@thedesignflowagency</li>
            <li>Privacy Policy</li>
            <li>Cancellation and refund</li>
            <li>Terms and Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-gray-400 uppercase text-xs tracking-wide mb-4">
            SOCIAL MEDIA
          </h3>
          <ul className="space-y-2">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      {/* Footer Trademark */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © 2024 designflow
      </div>
    </footer>
  );
}
