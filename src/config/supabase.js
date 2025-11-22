import { createClient } from '@supabase/supabase-js';

// Use the same Supabase URL and anon key from your app
const SUPABASE_URL = 'https://vlmjhtoriudhvxdqrcrs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsbWpodG9yaXVkaHZ4ZHFyY3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MTYxMjAsImV4cCI6MjA3NDk5MjEyMH0.153boHyqEJk55PUCCoIPFcO26XGc8PkEdiSUaqO0uAs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);




