"use client";

import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const MESSAGE_MAX = 2000;

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
    .max(MESSAGE_MAX, `Máximo ${MESSAGE_MAX} caracteres`),
  // 🕷️ Honeypot anti-spam: debe venir vacío
  hp: z.string().optional().refine((v) => !v, "Invalid"),
});

type FormValues = z.infer<typeof schema>;

const ContactForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const successRef = useRef<HTMLDivElement | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", email: "", message: "", hp: "" },
    mode: "onBlur",
  });

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = form;

  // Foco en el bloque de éxito
  useEffect(() => {
    if (success && successRef.current) {
      successRef.current.focus();
    }
  }, [success]);

  const onSubmit = async (values: FormValues) => {
    setServerError(null);

    // Si el honeypot tiene algo, abortamos (bot/robot)
    if (values.hp) return;

    const controller = new AbortController();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          message: values.message,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? `Error ${res.status}`);
      }

      setSuccess(true);
      reset();
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "No se pudo enviar el formulario.";
      setServerError(msg);
    }
  };

  // Contador live para el mensaje
  const messageValue = watch("message") ?? "";
  const charsLeft = MESSAGE_MAX - messageValue.length;

  if (success) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-lg border p-4 text-center outline-none"
        role="status"
        aria-live="polite"
      >
        <h4 className="mb-2 text-base font-semibold">
          ¡Gracias! Tu mensaje se envió con éxito ✌🏽
        </h4>
        <Button
          variant="secondary"
          onClick={() => setSuccess(false)}
          aria-label="Enviar otro mensaje"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
        aria-describedby={serverError ? "form-error" : undefined}
      >
        {/* Nombre */}
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username">Nombre</FormLabel>
              <FormControl>
                <Input
                  id="username"
                  placeholder="Tu nombre"
                  aria-invalid={!!form.formState.errors.username}
                  autoComplete="name"
                  className="dark:bg-slate-800"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  aria-invalid={!!form.formState.errors.email}
                  autoComplete="email"
                  className="dark:bg-slate-800"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mensaje */}
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="message">Mensaje</FormLabel>
              <FormControl>
                <div>
                  <Textarea
                    id="message"
                    placeholder="Escribí tu mensaje..."
                    rows={5}
                    aria-invalid={!!form.formState.errors.message}
                    aria-describedby="message-counter"
                    className="dark:bg-slate-800"
                    {...field}
                  />
                  <div
                    id="message-counter"
                    className="mt-1 text-right text-xs text-muted-foreground"
                    aria-live="polite"
                  >
                    {charsLeft} caracteres restantes
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot (oculto para humanos; bots suelen completarlo) */}
        <FormField
          control={control}
          name="hp"
          render={({ field }) => (
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              {...field}
            />
          )}
        />

        {/* Error del servidor */}
        {serverError && (
          <p id="form-error" className="text-sm text-red-600" role="alert">
            {serverError}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="min-w-32"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
