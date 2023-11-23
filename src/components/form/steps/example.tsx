"use client";
import axios from "axios";
import { SetStateAction, Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProdutosEServicos } from "@prisma/client";
import { useFormState } from "../form-context";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CardModel } from "@/components/cards/card";
import { Button } from "@/components/ui/button";

function Example() {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  type Tipo = (typeof servicos)[number];

  const FormSchema = z.object({
    type: z.string().refine((value) => servicos.includes(value as Tipo), {
      message: "You need to select a valid notification type.",
    }),
  });

  const { onHandleNext, setFormData, formData } = useFormState();

  const { register, handleSubmit } = useForm<typeof FormSchema>({
    defaultValues: formData,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onHandleFormSubmit = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  const handleServiceChange = (event: any) => {
    setSelectedService(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/servicos");
        const data = response.data;
        setServicos(data);
      } catch (error) {
        console.error("Erro ao buscar os serviços:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // C

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onHandleFormSubmit)} className="w-full">
        {loading && <LoadingCard />}
        {!loading && (
          <>
            {servicos.map((service: ProdutosEServicos) => (
              <div key={service.id} className={`flex flex-col gap-4 p-4 `}>
                <div>
                  <label>
                    <input
                      type="radio"
                      value={service.nome}
                      {...register("service")}
                      onChange={handleServiceChange}
                      className="hidden"
                    />
                    <CardModel
                      service={service}
                      selectedService={selectedService}
                    />
                  </label>
                </div>
              </div>
            ))}

            <div className="px-4">
              <Button className="w-full bg-rose-500 font-bold">
                Enviar
              </Button>
            </div>
          </>
        )}
      </form>
    </Form>
  );
}

function LoadingCard() {
  return <div className="w-full h-[20vh] rounded-md bg-zinc-500"></div>;
}

export default Example;
