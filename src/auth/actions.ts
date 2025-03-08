"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { signInSchema, signUpSchema } from "./schema";
import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { UserTable } from "@/drizzle/schema";
import { generateSalt, hashPassword } from "./core/password-hashser";

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
  const { success, data } = signInSchema.safeParse(unsafeData);
  if (!success) {
    console.log(data);

    return "Unable to log you in";
  }
  redirect("/");
}

export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
  const { success, data } = signUpSchema.safeParse(unsafeData);
  if (!success) {
    console.log(data);
    return "Unable to create account";
  }

  const existingUser = await db.query.UserTable.findFirst({
    where: eq(UserTable.email, data.email),
  });

  if (existingUser != null) return "Account already exists for this email";

  const hashedPassword = await hashPassword(data.password, generateSalt());
  console.log("testing here");

  console.log(hashedPassword);

  redirect("/");
}
export async function logOut() {
  redirect("/");
}
