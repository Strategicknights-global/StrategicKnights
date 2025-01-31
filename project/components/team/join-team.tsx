'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function JoinTeam() {
  const router = useRouter();

  return (
    <section className="py-20 bg-black/20 backdrop-blur-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-colorful mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented individuals who are passionate about digital innovation and client success.
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
            onClick={() => router.push('/careers')}
          >
            View Open Positions <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}