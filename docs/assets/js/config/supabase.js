import { ENV } from "./env.js";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

export const supabase = createClient(ENV.SUPABASE_URL, ENV.SUPABASE_ANON_KEY);
