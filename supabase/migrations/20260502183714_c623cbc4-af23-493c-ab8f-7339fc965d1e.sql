
-- Defense-in-depth: explicit deny policies for sensitive tables
CREATE POLICY "Deny update on internship_applications"
ON public.internship_applications
AS RESTRICTIVE FOR UPDATE
TO anon, authenticated
USING (false);

CREATE POLICY "Deny delete on internship_applications"
ON public.internship_applications
AS RESTRICTIVE FOR DELETE
TO anon, authenticated
USING (false);

CREATE POLICY "Deny insert on user_roles"
ON public.user_roles
AS RESTRICTIVE FOR INSERT
TO anon, authenticated
WITH CHECK (false);

CREATE POLICY "Deny update on user_roles"
ON public.user_roles
AS RESTRICTIVE FOR UPDATE
TO anon, authenticated
USING (false);

CREATE POLICY "Deny delete on user_roles"
ON public.user_roles
AS RESTRICTIVE FOR DELETE
TO anon, authenticated
USING (false);

-- Explicit deny policies for resumes storage bucket (defense-in-depth)
CREATE POLICY "Deny update on resumes bucket"
ON storage.objects
AS RESTRICTIVE FOR UPDATE
TO anon, authenticated
USING (bucket_id <> 'resumes');

CREATE POLICY "Deny delete on resumes bucket"
ON storage.objects
AS RESTRICTIVE FOR DELETE
TO anon, authenticated
USING (bucket_id <> 'resumes');

-- Lock down has_role SECURITY DEFINER function: only callable from policy contexts and service role
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;
