"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import Image from "next/image";
import { useSession } from "next-auth/react";

// project zod schema
export const createProjectSchema = z.object({
  title: z.string().min(3, "title is required"),
  description: z.string().min(10, "description is required"),
  thumbnail: z.url("Thumbnail url is required."),
  features: z.string().optional(),
  githubClient: z.url("Github client url is required."),
  githubServer: z.url("Github server url is required."),
});

type ProjectFormValues = z.infer<typeof createProjectSchema>;

export default function CreateProjectForm() {
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: "",
      features: "",
      githubClient: "",
      githubServer: "",
    },
  });

  // Create blog
  const handleCreateProject = async (values: ProjectFormValues) => {
    console.log(values);
    setSubmitting(true);
    try {
      const parsed = createProjectSchema.parse(values);

      //   const featuresArray = parsed?.features?.split("\n");

      const payload = {
        title: parsed.title,
        description: parsed.description,
        thumbnail: parsed.thumbnail || null,
        features: parsed?.features?.split("\n"),
        githubClient: parsed.githubClient,
        githubServer: parsed.githubServer,
        userId: Number(session?.user?.id),
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const parsedRes = await res.json();

      if (parsedRes?.data?.id) {
        toast.success("Project created successfully.");
        form.reset();
        setImagePreview(null);
      } else {
        toast.error("Project creation failed.");
      }

      console.log(parsedRes, "jey res");
    } catch (err: unknown) {
      console.error("something went wrong while creating project.", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pt-0 bg-white rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Create Project
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateProject)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Project title" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail (URL)</FormLabel>
                <FormControl>
                  <div className="flex gap-2 items-center">
                    <Input
                      {...field}
                      placeholder="Project thumbnail URL"
                      onChange={(e) => {
                        field.onChange(e);
                        const value = e.target.value;
                        setImagePreview(value ? value : null);
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Project Description"
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Features (One Per Line)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Project features (One Per Line)"
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {imagePreview ? (
            <div className="rounded overflow-hidden border">
              <Image
                src={imagePreview}
                width={400}
                height={250}
                alt="blog preview image"
              />
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="githubClient"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Client (URL)</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 items-center">
                      <Input {...field} placeholder="Github client url" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubServer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Server (URL)</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 items-center">
                      <Input {...field} placeholder="Github server URL" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => {
                form.reset();
                setImagePreview(null);
              }}
              type="button"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Creating..." : "Create Project"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
