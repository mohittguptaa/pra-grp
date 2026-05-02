import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import mainlogo from '../assets/mainlogo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const businesses = [
    { name: 'Pra Farm Fresh', path: '/businesses/farm-fresh' },
    { name: 'Construction', path: '/businesses/construction' },
    { name: 'Logistics & Fleet', path: '/businesses/logistics' },
    { name: 'Animal Nutrition', path: '/businesses/animal-nutrition' },
    { name: 'Allied Products', path: '/businesses/allied-products' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0A1929]/80 backdrop-blur-xl shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            {/* <div className="w-12 h-12 bg-gradient-to-br from-[#0A2540] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="font-bold text-white text-xl">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0A2540] to-[#3b82f6] dark:from-[#3b82f6] dark:to-[#fb923c] bg-clip-text text-transparent">
              PRA Group
            </span> */}
            <img src={mainlogo} alt="PRA Group Logo" className='h-20' w-40 />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('businesses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/businesses"
                className="px-4 py-2 rounded-lg text-foreground hover:text-[#0A2540] dark:hover:text-[#3b82f6] transition-colors flex items-center gap-1 font-medium"
              >
                Businesses
                <ChevronDown className="w-4 h-4" />
              </Link>
              <AnimatePresence>
                {activeDropdown === 'businesses' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#132f4c] rounded-xl shadow-2xl border border-border overflow-hidden backdrop-blur-xl"
                  >
                    {businesses.map((business) => (
                      <Link
                        key={business.path}
                        to={business.path}
                        className="block px-4 py-3 hover:bg-muted transition-colors text-foreground hover:text-[#0A2540] dark:hover:text-[#3b82f6] font-medium"
                      >
                        {business.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/products">Products</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/certificates">Certificates</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#0A1929] border-t border-border"
          >
            <div className="px-4 py-4 space-y-2">
              <MobileNavLink to="/">Home</MobileNavLink>
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'businesses' ? null : 'businesses')}
                  className="w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-between font-medium"
                >
                  Businesses
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'businesses' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'businesses' && (
                  <div className="pl-4 mt-2 space-y-1">
                    {businesses.map((business) => (
                      <MobileNavLink key={business.path} to={business.path}>
                        {business.name}
                      </MobileNavLink>
                    ))}
                  </div>
                )}
              </div>
              <MobileNavLink to="/products">Products</MobileNavLink>
              <MobileNavLink to="/projects">Projects</MobileNavLink>
              <MobileNavLink to="/about">About</MobileNavLink>
              <MobileNavLink to="/certificates">Certificates</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              <Link
                to="/contact"
                className="block mt-4 px-6 py-3 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-colors font-medium ${
        isActive
          ? 'text-[#0A2540] dark:text-[#3b82f6] bg-muted'
          : 'text-foreground hover:text-[#0A2540] dark:hover:text-[#3b82f6]'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block px-4 py-2 rounded-lg transition-colors font-medium ${
        isActive
          ? 'text-[#0A2540] dark:text-[#3b82f6] bg-muted'
          : 'text-foreground hover:bg-muted'
      }`}
    >
      {children}
    </Link>
  );
}
