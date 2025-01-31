'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  budget: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('access_key', 'efe5e855-fda5-43da-8318-d5ee92ccfd49');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('company', data.company || '');
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      formData.append('budget', data.budget || '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Success!',
          description: 'Your message has been sent. We\'ll get back to you soon.',
        });
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold gradient-text-colorful mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                {...register('name')}
                placeholder="Enter your full name"
                className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register('email')}
                type="email"
                placeholder="Enter your email address"
                className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                {...register('phone')}
                placeholder="Enter your phone number"
                className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register('company')}
                placeholder="Enter your company name (optional)"
                className="bg-black/20 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
          </div>

          <div>
            <Input
              {...register('subject')}
              placeholder="Enter the subject of your message"
              className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.subject ? 'border-red-500' : ''}`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <select
              {...register('budget')}
              className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-white/50 focus:border-white/20 focus:ring-white/20"
            >
              <option value="" className="bg-black">Select the service you're interested in</option>
              <option value="Website Designing" className="bg-black">Website Designing</option>
              <option value="E-Commerce Development" className="bg-black">E-Commerce Development</option>
              <option value="Software Development" className="bg-black">Software Development</option>
              <option value="Digital Marketing" className="bg-black">Digital Marketing</option>
              <option value="Social Media Marketing" className="bg-black">Social Media Marketing</option>
              <option value="Branding" className="bg-black">Branding</option>
              <option value="Google AdWords" className="bg-black">Google AdWords</option>
              <option value="Email & SMS Campaigns" className="bg-black">Email & SMS Campaigns</option>
            </select>
          </div>

          <div>
            <Textarea
              {...register('message')}
              placeholder="Tell us about your project or requirements"
              className={`min-h-[150px] bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}