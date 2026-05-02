import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import mainlogo from '../assets/mainlogo.png';

export function Footer() {
  return (
    <footer className="bg-[#0A2540] dark:bg-[#0A1929] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            {/* <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#fb923c] rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">PRA Group</span>
            </div> */}
            <img src={mainlogo} alt="PRA Group Logo" className='h-20' width="200" />            
            <p className="text-blue-200 mb-6">
              Diversified excellence across industries, building trust through quality and innovation.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Businesses</h3>
            <ul className="space-y-3">
              <FooterLink to="/businesses/farm-fresh">Pra Farm Fresh</FooterLink>
              <FooterLink to="/businesses/construction">Construction</FooterLink>
              <FooterLink to="/businesses/logistics">Logistics & Fleet</FooterLink>
              <FooterLink to="/businesses/animal-nutrition">Animal Nutrition</FooterLink>
              <FooterLink to="/businesses/allied-products">Allied Products</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/certificates">Certificates</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#fb923c]" />
                <span className="text-blue-200">Bank Colony, Kashipur-244713, Udham Singh Nagar, Uttarakhand, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#fb923c]" />
                <span className="text-blue-200">+91-9004138197</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#fb923c]" />
                <span className="text-blue-200">praenterprise2023@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} PRA Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-blue-200 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}
