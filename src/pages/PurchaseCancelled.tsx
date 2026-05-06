import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PurchaseCancelled() {
  return (
    <div className="bg-[#0F2E4A] min-h-screen text-white">
      <div className="container mx-auto px-6 py-20">
        <div
          className="max-w-2xl mx-auto text-center"
        >
          {/* Cancel Icon */}
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-500/10 mb-8"
          >
            <XCircle className="w-12 h-12 text-orange-500" />
          </div>

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
              <Button className="bg-[#3B7DBF] hover:bg-[#3B7DBF] text-white font-semibold px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
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
        </div>
      </div>
    </div>
  );
}
