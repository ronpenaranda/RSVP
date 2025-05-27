'use server'
import RSVPClass from "@/model/rsvp.model";

export const AddGuest =  async (data: any) => {
    if(!data){
        return "error"
    }
    const res = await RSVPClass.addGuest(data)

    return res
}