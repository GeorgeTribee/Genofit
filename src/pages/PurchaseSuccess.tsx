import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PurchaseSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Save session ID to localStorage for access
    if (sessionId) {
      localStorage.setItem('lastPurchaseSessionId', sessionId);
    }
    setIsLoading(false);
  }, [sessionId]);

  if (isLoading) {
    return (
      <div className="bg-[#0A1825] min-h-screen flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A1825] min-h-screen text-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-500" />
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment Successful!
          </h1>

          <p className="text-white/70 text-lg mb-8">
            Thank you for your purchase. Your enrollment is confirmed!
          </p>

          {/* Order Details Card */}
          <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 mb-8 text-left">
            <h2 className="text-xl font-bold mb-4">What's Next?</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0088ff] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Check Your Email</p>
                  <p className="text-white/60 text-sm">
                    We've sent a confirmation email with course access instructions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Download className="w-5 h-5 text-[#0088ff] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Access Course Materials</p>
                  <p className="text-white/60 text-sm">
                    You'll receive login credentials to access all course content
                  </p>
                </div>
              </div>
            </div>

            {sessionId && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/40">
                  Order ID: {sessionId.substring(0, 20)}...
                </p>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-[#0033ff] hover:bg-[#0044ff] text-white font-semibold px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Back to Home
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Support Note */}
          <p className="text-white/40 text-sm mt-12">
            Have questions? Contact us at{' '}
            <a
              href="mailto:support@genofit.com"
              className="text-[#0088ff] hover:underline"
            >
              support@genofit.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
