// app/representatives/new/page.tsx
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

// ADAPTAR ESTE SCHEMA PARA CORRESPONDER AO SEU REPRESENTATIVE DO PRISMA
const representativeSchema = z.object({
  tipo: z.string().min(1, "Tipo é obrigatório"),
  sigla: z.string().min(1, "Sigla é obrigatória"),
  cnpj: z.string().length(14, "CNPJ deve ter 14 caracteres"),
  nome_fantasia: z.string().min(1, "Nome fantasia é obrigatório"),
  razao_social: z.string().min(1, "Razão social é obrigatória"),
  representant_id: z.string().min(1, "ID do representante é obrigatório"),
  universidade: z.string().min(1, "Universidade é obrigatória"),
  campus: z.string().min(1, "Campus é obrigatório"),
  numero_membros: z.coerce.number().min(0, "Número de membros deve ser maior ou igual a 0"), // Converte para número
  data_fundacao: z.string().min(1, "Data de fundação é obrigatória"),
  telefone: z.string().min(8, "Telefone é obrigatório"),
  email: z.string().email("Email inválido"),
  site: z.string().url("Site inválido").optional().or(z.literal('')),
  status: z.string().min(1, "Status é obrigatório"),
  cep: z.string().min(8, "CEP é obrigatório"),
  facebook: z.string().url("URL do Facebook inválida").optional().or(z.literal('')),
  instagram: z.string().url("URL do Instagram inválida").optional().or(z.literal('')),
});

type RepresentativeFormValues = z.infer<typeof representativeSchema>;

export default function NewRepresentativePage() {
  const router = useRouter();
  const form = useForm<RepresentativeFormValues>({
    resolver: zodResolver(representativeSchema),
    defaultValues: {
      tipo: "",
      sigla: "",
      cnpj: "",
      nome_fantasia: "",
      razao_social: "",
      representant_id: "",
      universidade: "",
      campus: "",
      numero_membros: 0,
      data_fundacao: "",
      telefone: "",
      email: "",
      site: "",
      status: "Ativo", // Pode ser um select ou algo similar
      cep: "",
      facebook: "",
      instagram: "",
    },
  });

  async function onSubmit(data: RepresentativeFormValues) {
    console.log("Dados do representante a serem enviados:", data);
    try {
      const response = await fetch("http://localhost:8000/representatives", { // Substitua pela URL do seu backend NestJS
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao salvar representante");
      }

      const result = await response.json();
      console.log("Representante salvo com sucesso:", result);
      router.push("/representatives");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Cadastro de Representante</CardTitle>
        </CardHeader>
        <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Campos do formulário ADAPTADOS para o seu schema.prisma */}
            <FormField
              control={form.control}
              name="nome_fantasia" // Exemplo de campo adaptado
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Fantasia</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da Organização" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Continue adaptando todos os campos aqui */}
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ</FormLabel>
                  <FormControl>
                    <Input placeholder="00.000.000/0000-00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="data_fundacao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Fundação</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
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
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="nome@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="+55 (xx) xxxxx-xxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="universidade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Universidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da universidade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="campus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campus</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do campus" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="numero_membros"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de Membros</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <Input placeholder="00000-000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    {/* Exemplo de select para status */}
                    <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tipo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <FormControl>
                    <Input placeholder="Tipo do representante" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="sigla"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sigla</FormLabel>
                  <FormControl>
                    <Input placeholder="Sigla do representante" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="razao_social"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Razão Social</FormLabel>
                  <FormControl>
                    <Input placeholder="Razão Social" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="representant_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Representante</FormLabel>
                  <FormControl>
                    <Input placeholder="ID do representante" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="site"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site</FormLabel>
                  <FormControl>
                    <Input placeholder="https://www.site.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input placeholder="https://facebook.com/seuperfil" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input placeholder="https://instagram.com/seuperfil" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Salvar</Button>
            <Button variant="outline" type="button" className="ml-2" onClick={() => router.back()}>
              Cancelar
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
}