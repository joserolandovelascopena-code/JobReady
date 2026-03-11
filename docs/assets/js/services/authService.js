import { supabase } from "../config/supabase.js";

// SIGN UP
export async function signup(fullName, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo:
        "https://joserolandovelascopena-code.github.io/JobReady/pages/auth/verify.html",

      data: {
        display_name: fullName,
      },
    },
  });

  if (error) {
    console.error("Signup error:", error.message);
    throw error;
  }

  return data?.user;
}

export async function loginGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) throw error;
}

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data.user;
}
