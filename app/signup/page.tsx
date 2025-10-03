"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useId } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be a string at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .regex(
      /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).*$/,
      "Password must be at least 8 characters and mixed with at least one uppercase, lowercase and special character."
    ),
});

const Signup = () => {
  const id = useId();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // Signup form submit
  async function onSubmit(userInfo: z.infer<typeof signUpSchema>) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const userRes = await res.json();
      if (userRes?.data?.id) {
        toast.success("User created successfully");
      } else {
        toast.error("User creation failed");
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error("User creation failed");
    }
  }

  // handle social login
  // const handleSocialLogin = async (provider: 'google') => {
  //   try {
  //     await signIn(provider, {
  //       callbackUrl: '/'
  //     })
  //   } catch (err: unknown) {
  //     console.log(err)
  //     toast.error('Social Login Failed')
  //   }
  // }

  return (
    <div className="container mx-auto px-5 flex items-center justify-center min-h-screen">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto border-1 shadow-md px-5 py-5 rounded-lg">
        <div className="text-center mb-5">
          <h1 className="font-bold text-2xl mb-3">Create Account</h1>
          <p>
            Enter the information below to create an account. Already have an
            account?{" "}
            <Link href="/login" className="underline">
              Login Now
            </Link>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={`${id}-fullName`}>
                    Full Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id={`${id}-fullName`}
                      placeholder="Full Name"
                    />
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
                  <FormLabel htmlFor={`${id}-email`}>
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id={`${id}-email`}
                      type="email"
                      placeholder="example@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={`${id}-password`}>
                    Password <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id={`${id}-password`}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between gap-2">
              <a className="text-sm underline hover:no-underline" href="#">
                Forgot password?
              </a>
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>

        {/* <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1 my-5">
          <span className="text-muted-foreground text-xs">Or</span>
        </div> */}

        {/* <Button onClick={() => handleSocialLogin('google')} variant="outline" className="w-full cursor-pointer">
          <FcGoogle />
          Login with Google
        </Button> */}

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
