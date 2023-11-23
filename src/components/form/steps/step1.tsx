import { useFormState } from "../form-context";

import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type TFormValues = {
  username: string;
  teste: string
};

const FormSchema = z.object({
  type: z.enum(["Massagem simples", "Massagem Completa", "none"], {
    required_error: "You need to select a notification type.",
  }),
})

export function UserNameForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<typeof FormSchema>({
    defaultValues: formData,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const onHandleFormSubmit = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <Form {...form}>
      
      <form onSubmit={form.handleSubmit(onHandleFormSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className={`
                    flex 
                    items-center 
                    space-x-3 
                    space-y-0 
                    border
                    p-6
                    transition-color
                    radio-item ${field.value === "Massagem simples" ? "border-green-500" : "border-black"}
                  `}>
                    <FormControl>
                      <RadioGroupItem value="Massagem simples" className="hidden" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className={`
                    flex 
                    items-center 
                    space-x-3 
                    space-y-0 
                    border
                    transition-color
                    p-6
                    radio-item ${field.value === "Massagem Completa" ? "border-green-500" : "border-black"}
                  `}>
                    <FormControl>
                      <RadioGroupItem 
                        value="Massagem Completa" 
                        className="hidden"
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className={`
                    flex 
                    items-center 
                    space-x-3 
                    space-y-0 
                    border
                    p-6

                    transition-color
                    radio-item ${field.value === "none" ? "border-green-500" : "border-black"}
                  `}>
                    <FormControl>
                      <RadioGroupItem value="none" className="hidden" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    
      
      

     
  );
}
