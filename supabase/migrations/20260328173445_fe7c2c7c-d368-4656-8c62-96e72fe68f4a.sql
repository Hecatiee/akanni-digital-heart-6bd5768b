
-- Block all SELECT on internship_applications (only service_role can read)
CREATE POLICY "No public select on internship_applications"
ON public.internship_applications
FOR SELECT
TO anon, authenticated
USING (false);

-- Remove overly permissive storage SELECT policy
DROP POLICY IF EXISTS "Users can view resumes" ON storage.objects;

-- Restrict storage SELECT to service_role only
CREATE POLICY "Only service role can view resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'resumes' AND auth.role() = 'service_role');
