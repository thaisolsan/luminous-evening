CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  guests_count INTEGER NOT NULL DEFAULT 1,
  guest_names TEXT[] NOT NULL DEFAULT '{}',
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvps ADD CONSTRAINT rsvps_name_len CHECK (char_length(name) BETWEEN 2 AND 100);
ALTER TABLE public.rsvps ADD CONSTRAINT rsvps_whatsapp_len CHECK (char_length(whatsapp) BETWEEN 8 AND 25);
ALTER TABLE public.rsvps ADD CONSTRAINT rsvps_guests_range CHECK (guests_count BETWEEN 1 AND 10);
ALTER TABLE public.rsvps ADD CONSTRAINT rsvps_message_len CHECK (message IS NULL OR char_length(message) <= 500);
ALTER TABLE public.rsvps ADD CONSTRAINT rsvps_guest_names_len CHECK (array_length(guest_names, 1) IS NULL OR array_length(guest_names, 1) <= 10);

GRANT INSERT ON public.rsvps TO anon;
GRANT SELECT, INSERT ON public.rsvps TO authenticated;
GRANT ALL ON public.rsvps TO service_role;

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an RSVP" ON public.rsvps FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Signed-in users can view RSVPs" ON public.rsvps FOR SELECT TO authenticated USING (true);