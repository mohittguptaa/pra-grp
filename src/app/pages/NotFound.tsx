import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-[#0A2540] to-[#3b82f6] dark:from-[#3b82f6] dark:to-[#fb923c] bg-clip-text text-transparent">
              404
            </h1>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Link
              to="/businesses"
              className="p-4 rounded-xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all text-center"
            >
              <h3 className="font-semibold mb-1">Businesses</h3>
              <p className="text-sm text-muted-foreground">Our verticals</p>
            </Link>
            <Link
              to="/products"
              className="p-4 rounded-xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all text-center"
            >
              <h3 className="font-semibold mb-1">Products</h3>
              <p className="text-sm text-muted-foreground">View catalog</p>
            </Link>
            <Link
              to="/projects"
              className="p-4 rounded-xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all text-center"
            >
              <h3 className="font-semibold mb-1">Projects</h3>
              <p className="text-sm text-muted-foreground">Our work</p>
            </Link>
            <Link
              to="/contact"
              className="p-4 rounded-xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all text-center"
            >
              <h3 className="font-semibold mb-1">Contact</h3>
              <p className="text-sm text-muted-foreground">Get in touch</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
