-- Drop the overly permissive SELECT policy that allows public access to applicant data
DROP POLICY IF EXISTS "Users can view their own applications" ON public.internship_applications;

-- Applicant data should only be accessible via backend/admin dashboard
-- No public SELECT access needed for this table