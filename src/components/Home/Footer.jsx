// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">About</h2>
          <p className="text-sm leading-6">
            We are a modern web platform focused on delivering high-quality
            digital experiences. Our mission is to build fast, scalable, and
            user-friendly applications.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Contact</h2>
          <ul className="text-sm space-y-2">
            <li>Email: contact@example.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">Facebook</Link>
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">Instagram</Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
