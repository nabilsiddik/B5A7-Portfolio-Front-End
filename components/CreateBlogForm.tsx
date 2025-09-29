"use client"

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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

// Blog zod schema
const blogSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    content: z.string().min(10, "Content must be at least 10 characters"),
    featuredImage: z
        .string()
        .url("Featured image must be a valid URL"),
    isFeatured: z.boolean(),
    tags: z
        .string(),
})

type BlogFormValues = z.infer<typeof blogSchema>;

export default function CreateBlogForm() {
    const [submitting, setSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const form = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: "",
            content: "",
            featuredImage: "",
            isFeatured: false,
            tags: "",
        },
    });

    // Create blog
    const handleCreateBlog = async (values: BlogFormValues) => {
        console.log(values)
        setSubmitting(true);
        try {
            const parsed = blogSchema.parse(values);

            const payload = {
                title: parsed.title,
                content: parsed.content,
                featuredImage: parsed.featuredImage || null,
                isFeatured: parsed.isFeatured || false,
                tags: parsed.tags.split(',') || []
            };

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const parsedRes = await res.json()

            if (parsedRes?.data?.id) {
                toast.success('Blog created successfully.')
                form.reset();
                setImagePreview(null);
            }else{
                toast.error('Blog creation failed.')
            }

            console.log(parsedRes, 'jey res')
        } catch (err: unknown) {
            console.error('something went wrong while creating blog.', err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Create a Blog Post</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleCreateBlog)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Blog title" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder="blog-content" className="min-h-[180px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="featuredImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Featured Image (URL)</FormLabel>
                                    <FormControl>
                                        <div className="flex gap-2 items-center">
                                            <Input
                                                {...field}
                                                placeholder="https://example.com/photo.jpg"
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

                        <FormField
                            control={form.control}
                            name="isFeatured"
                            render={({ field }) => (
                                <FormItem className="flex items-center gap-3">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(value) => field.onChange(Boolean(value))}
                                        />
                                    </FormControl>
                                    <div>
                                        <FormLabel className="mb-0">Featured</FormLabel>
                                        <p className="text-sm text-muted-foreground">Mark this post as featured</p>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags (comma separated)</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="react, nextjs, tailwind" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {imagePreview ? (
                        <div className="rounded overflow-hidden border">
                            <Image src={imagePreview} width={400} height={250} alt="blog preview image"/>
                        </div>
                    ) : null}

                    <div className="flex items-center justify-end gap-3">
                        <Button variant="ghost" onClick={() => { form.reset(); setImagePreview(null); }} type="button">Cancel</Button>
                        <Button type="submit" disabled={submitting}>{submitting ? "Creating..." : "Create Post"}</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
