import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import Link from "next/link";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const Authform = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    // handle form submission
  };
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {isSignIn ? "Login" : "Sign Up"}
              </CardTitle>
              <CardDescription>
                {isSignIn
                  ? "Enter your email below to login to your account"
                  : "Please complete all fields to register"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="w-full space-y-6"
                >
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      {Object.keys(defaultValues).map((field) => (
                        <FormField
                          key={field}
                          control={form.control}
                          name={field as Path<T>}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="capitalize">
                                {
                                  FIELD_NAMES[
                                    field.name as keyof typeof FIELD_NAMES
                                  ]
                                }
                              </FormLabel>
                              <FormControl>
                                <Input
                                  required
                                  type={
                                    FIELD_TYPES[
                                      field.name as keyof typeof FIELD_TYPES
                                    ]
                                  }
                                  {...field}
                                  className="form-input"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    {isSignIn ? "Sign In" : "Sign Up"}
                  </Button>

                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </form>
              </Form>
              <p className="text-center text-base font-medium pt-5">
                {isSignIn ? "New to Here? " : "Already have an account? "}

                <Link
                  href={isSignIn ? "/sign-up" : "/sign-in"}
                  className="font-bold text-primary"
                >
                  {isSignIn ? "Create an account" : "Sign in"}
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Authform;
