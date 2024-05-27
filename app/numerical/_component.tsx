"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GetFn from "./_hook";
import { useState } from "react";
import TableData, { DataShow } from "./_table";
import toast from "react-hot-toast";

const formSchema = z.object({
  Function: z.string().min(1, {
    message: "Function must be at least 1 characters.",
  }),
  a: z.string().min(1, {
    message: "A must be at least 1 characters.",
  }),
  b: z.string().min(1, {
    message: "B must be at least 1 characters.",
  }),
  tolerance: z.string().min(1, {
    message: "Tolerance must be at least 1 characters.",
  }),
});

export function ProfileForm() {
  const [result, setResult] = useState("");
  const [iterations, setIterations] = useState<DataShow[]>([
    {
      iteration: "0",
      a: "0",
      b: "0",
      c: "0",
      fc: "0",
    },
  ]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Function: "",
      a: "",
      b: "",
      tolerance: "",
    },
  });

  const { falsePositionMethod, functionToEvaluate } = GetFn();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const valideFN = functionToEvaluate(values.Function, 0);
    if (valideFN === null)
      return toast.error(
        `Invalid function. Please enter a valid function of ${values.Function}`
      );
    const root = falsePositionMethod(
      +values.a,
      +values.b,
      +values.tolerance,
      values.Function
    );
    setResult(root.c.toString());
    //@ts-ignore
    setIterations(root.iterArray);
  }
  return (
    <Form {...form}>
      <h1 className="text-center text-3xl font-bold tracking-[3px] gradient">
        False Method
      </h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto p-5 bg-gray-50 rounded-xl shadow-xl"
      >
        {Object.entries(form.getValues()).map(([key, value]) => {
          return (
            <FormField
              control={form.control}
              name={key as any}
              key={key}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Value of{" "}
                    <span className="gradient font-bold tracking-[1px]">
                      {" "}
                      {String(field.name).toUpperCase()}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={` Enter  ${String(
                        field.name
                      ).toUpperCase()} Value `}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <Button type="submit" className="w-full py-5 ">
          Submit
        </Button>
        {result && (
          <div className="flex gap-3 ">
            <h1>Result : </h1>
            <span>{result}</span>
          </div>
        )}
        <TableData data={iterations} title="THe All Data Shown Above " />
      </form>
    </Form>
  );
}
