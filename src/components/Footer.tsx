function Footer() {
  return (
    <footer>
    <div className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-4 lg:px-8">
        {/* Row 1 */}
        <div className="mb-8">
          <h1 className="text-white text-lg font-semibold">About Us</h1>
          <p>
            Music School is a premier institution dedicated to learning the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
          </p>
        </div>
        {/* Row 2 */}
        <div className="mb-8">
          <h1 className="text-white text-lg font-semibold">Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Row 3 */}
        <div className="mb-8">
          <h1 className="text-white text-lg font-semibold">Follow Us</h1>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        {/* Row 4 */}
        <div>
          <h1 className="text-white text-lg font-semibold">Contact Us</h1>
          <p>
            Chennai, India 603104<br />
            Email: info@musicSchool.com<br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
    </div>
    <h3 className="text-center text-xs pt-6 text-cyan-50  font-semibold">@ 2024 Music School. All rights reserved</h3> 
    </footer>
  );
}



export default Footer;
