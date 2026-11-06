const SUPABASE_URL = "https://wiryisehatplfwqxnxmp.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_cQq5WFaCVeq4OCJSQNHdcg_z1bpFjl3";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("VoltaVenda conectada ao Supabase.");

