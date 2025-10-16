"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const schema = z.object({
  username: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "Máximo 50 caracteres"),
  email: z
    .string()
    .trim()
    .email("Ingresá un email válido")
    .max(100, "Máximo 100 caracteres"),
  message: z
    .string()
    .trim()
    .min(10, "Contame un poco más (mín. 10 caracteres)")
    .max(2000, "Máximo 2000 caracteres"),
  // Honeypot anti-spam (campo oculto). Si lo usás, agregalo al form.
  // hp: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
    mode: "onBlur", // valida al salir del campo (opcional)
  });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    setIsSending(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Error" }));
        throw new Error(error || `Error ${res.status}`);
      }

      setSuccess(true);
      form.reset();
    } catch (err: any) {
      setServerError(err?.message ?? "No se pudo enviar el formulario.");
    } finally {
      setIsSending(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-lg border p-4 text-center">
        <h4 className="text-base font-semibold mb-2">
          ¡Gracias! Tu mensaje se envió con éxito ✌🏽
        </h4>
        <Button variant="secondary" onClick={() => setSuccess(false)}>
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Tu nombre"
                  aria-label="Nombre"
                  aria-invalid={!!form.formState.errors.username}
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Tu email"
                  type="email"
                  aria-label="Email"
                  aria-invalid={!!form.formState.errors.email}
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mensaje */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Escribí tu mensaje..."
                  aria-label="Mensaje"
                  aria-invalid={!!form.formState.errors.message}
                  rows={5}
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Error del servidor */}
        {serverError && (
          <p className="text-sm text-red-600">{serverError}</p>
        )}

        <Button type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
