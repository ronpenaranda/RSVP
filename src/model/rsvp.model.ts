'use server'
import supabase from "@/db/supabase";

export interface RSVP {
  id: number;
  name: string;
  created_at: string;
}

class RSVPClass {

  static async addGuest(data: RSVP) {
    const { data: RSVP_table, error } = await supabase
    .from('RSVP_table')
    .insert(
      data
    )
    .select()
              
    if (error) {
      console.error("Error inserting guest:", error);
      throw error;
    }

    return RSVP_table || [];
  }

}

export default RSVPClass;