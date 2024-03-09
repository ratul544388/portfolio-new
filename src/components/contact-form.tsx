"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { sendEmail } from "@/actions/send-email";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactSchema } from "@/schemas";
import { motion } from "framer-motion";
import { useTransition } from "react";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { IoSendSharp } from "react-icons/io5";

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const FramerButton = motion(Button);
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof ContactSchema>) {
    startTransition(() => {
      sendEmail(values).then(({ error, success }) => {
        if (success) {
          toast.success(success);
          form.reset();
        } else if (error) {
          toast.error(error);
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input label="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input label="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea label="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="ml-auto" disabled={isPending}>
          Submit
          <IoSendSharp className="h-4 w-4 ml-2" />
        </Button>
      </form>
    </Form>
  );
};
