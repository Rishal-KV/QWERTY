"use server"

import { User } from "@/models/users.model";

export async function register(formData: FormData){

    const name = formData.get('name');
    const email = formData.get("email");
    const password = formData.get("password");
    if (!name || !email || !password) {
        return { success: false, message: "All fields are required" };
      }


      const existingUser = await User.findOne({
        email   
      })

      



}

