import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { XCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PurchaseCancelled() {
  return (
    <div className="bg-[#0A1825] min-h-screen text-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Cancel Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-500/10 mb-8"
          >
            <XCircle className="w-12 h-12 text-orange-500" />
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment Cancelled
          </h1>

          <p className="text-white/70 text-lg mb-8">
            Your payment was cancelled. No charges have been made to your account.
          </p>

          {/* Info Card */}
          <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 mb-8 text-left">
            <p className="text-white/80 mb-4">
              If you experienced any issues during checkout or have questions about our courses,
              please don't hesitate to reach out to our support team.
            </p>
            <p className="text-white/60 text-sm">
              We're here to help you find the perfect course for your QA journey!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#courses">
              <Button className="bg-[#0033ff] hover:bg-[#0044ff] text-white font-semibold px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                View Courses
              </Button>
            </Link>

            <Link to="/get-in-touch">
              <Button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-lg transition-all duration-300">
                Contact Support
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
