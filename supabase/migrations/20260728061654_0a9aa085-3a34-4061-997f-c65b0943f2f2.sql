CREATE TABLE IF NOT EXISTS public.product_inquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name text NOT NULL,
  industry text,
  website text,
  contact_name text NOT NULL,
  role text,
  work_email text NOT NULL,
  phone text,
  use_case text,
  preferred_date date,
  preferred_time text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.product_inquiries TO anon, authenticated;
GRANT ALL ON public.product_inquiries TO service_role;

ALTER TABLE public.product_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit product inquiries" ON public.product_inquiries;
CREATE POLICY "Anyone can submit product inquiries"
  ON public.product_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "No public select on product_inquiries" ON public.product_inquiries;
CREATE POLICY "No public select on product_inquiries"
  ON public.product_inquiries FOR SELECT
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "Deny update on product_inquiries" ON public.product_inquiries;
CREATE POLICY "Deny update on product_inquiries"
  ON public.product_inquiries
  AS RESTRICTIVE FOR UPDATE
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "Deny delete on product_inquiries" ON public.product_inquiries;
CREATE POLICY "Deny delete on product_inquiries"
  ON public.product_inquiries
  AS RESTRICTIVE FOR DELETE
  TO anon, authenticated
  USING (false);