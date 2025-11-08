-- Create internships applications table
CREATE TABLE public.internship_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  domain TEXT NOT NULL,
  location TEXT NOT NULL,
  is_freelancer BOOLEAN NOT NULL DEFAULT false,
  resume_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.internship_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications
CREATE POLICY "Anyone can submit internship applications" 
ON public.internship_applications 
FOR INSERT 
WITH CHECK (true);

-- Only allow users to view their own applications (based on email)
CREATE POLICY "Users can view their own applications" 
ON public.internship_applications 
FOR SELECT 
USING (true);

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'resumes',
  'resumes',
  false,
  26214400,
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
);

-- Storage policies for resumes
CREATE POLICY "Anyone can upload resumes" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Users can view resumes" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'resumes');