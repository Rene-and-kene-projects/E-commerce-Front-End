import { createClient } from "@supabase/supabase-js";

const options = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: { "x-my-custom-header": "my-app-name" },
  },
};
const supabase = createClient(
  "https://igpjuyccrqeafpnrkguw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlncGp1eWNjcnFlYWZwbnJrZ3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwMzk5NTUsImV4cCI6MjAwNDYxNTk1NX0.ZzdCawYNXq8DOMkSPWMYr4mm6Ml8SgD4Uf1JMPPVxqM",
  options
);
