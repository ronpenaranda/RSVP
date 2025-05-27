
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vnvrjooetldxpezcwkhg.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZudnJqb29ldGxkeHBlemN3a2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMDU1MTcsImV4cCI6MjA2Mjc4MTUxN30.ijAdcGBmg85qmmPG3s0s6W20XYA7TInh2EfTn58E4-k`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;