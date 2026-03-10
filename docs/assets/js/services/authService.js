import { supabase } from "../config/supabase.js";

//SIGN UP
export async function signup(fullName, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo:
        "https://joserolandovelascopena-code.github.io/JobReady/pages/auth/verify.html",

      data: {
        display_name: fullName,
      },
    },
  });

  if (error) throw error;

  return data.user;
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
