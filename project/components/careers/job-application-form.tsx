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
import { Upload } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  position: z.string().min(2, 'Position is required'),
  experience: z.string().min(1, 'Years of experience is required'),
  resume: z.string().optional(),
  coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function JobApplicationForm() {
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
      formData.append('name', `${data.firstName} ${data.lastName}`);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('position', data.position);
      formData.append('experience', data.experience);
      formData.append('resume', data.resume || '');
      formData.append('coverLetter', data.coverLetter);
      formData.append('subject', `Job Application for ${data.position}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Application Submitted!',
          description: 'We\'ll review your application and get back to you soon.',
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
    <section className="py-20 bg-black/20 backdrop-blur-lg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold gradient-text-colorful mb-6">Job Application Form</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    {...register('firstName')}
                    placeholder="First Name *"
                    className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    {...register('lastName')}
                    placeholder="Last Name *"
                    className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="Email Address *"
                    className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    {...register('phone')}
                    placeholder="Phone Number *"
                    className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    {...register('position')}
                    placeholder="Position Applied For *"
                    className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.position ? 'border-red-500' : ''}`}
                  />
                  {errors.position && (
                    <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    {...register('experience')}
                    placeholder="Years of Experience *"
                    className={`bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.experience ? 'border-red-500' : ''}`}
                  />
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="relative">
                  <Input
                    {...register('resume')}
                    type="file"
                    className="hidden"
                    id="resume"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center gap-2 p-4 border border-dashed border-white/20 rounded-lg cursor-pointer bg-black/20 text-white/80 hover:bg-black/30 transition-colors"
                  >
                    <Upload className="w-5 h-5" />
                    Upload Resume (Optional)
                  </label>
                </div>
              </div>

              <div>
                <Textarea
                  {...register('coverLetter')}
                  placeholder="Cover Letter *"
                  className={`min-h-[150px] bg-black/20 border-white/10 text-white placeholder:text-white/50 ${errors.coverLetter ? 'border-red-500' : ''}`}
                />
                {errors.coverLetter && (
                  <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}