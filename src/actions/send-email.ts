"use server";
import * as z from "zod";
import { Resend } from "resend";
import { ContactSchema } from "@/schemas";
import { myEmail } from "@/config";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (values: z.infer<typeof ContactSchema>) => {
  const validatedFields = ContactSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: myEmail,
    subject: "Email from Portfolio Site",
    html: `
      <p><strong>Name:</strong> ${values.name}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <p><strong>Message:</strong> ${values.message}</p>
    `,
  });

  return { success: "Email was sent" };
};
