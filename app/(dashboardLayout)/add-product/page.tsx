'use client'

import React, { useEffect, useState } from 'react'
import Form from 'next/form'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createProduct } from '@/app/actions/create'
import ProductFeaturedImageUploader from '@/components/ProductFeaturedImageUploader'
import { useSession } from './../../../node_modules/next-auth/react';
import { IProductCategory } from '@/interfaces/product.interface';

const AddProduct = () => {
  const [categories, setCategories] = useState<IProductCategory[]>([])
  const [loading, setLoading] = useState(true);
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/product-category");
        const data= await res.json()

        setCategories(data.data);

      } catch (error: unknown) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories()
  }, [])

  const {data: session} = useSession()

  return (
    <div>
      <h1 className="px-5 font-bold text-center text-3xl">Add Products</h1>
      <h1>{session?.user?.email}</h1>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.expires}</h1>
      <div className='w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto'>
        <Form action={createProduct}>
          {/* Product Title */}
          <div className='mb-5'>
            <label>Product Title</label>
            <Input name="title" placeholder="Product Title" className='py-5' />
          </div>

          <div className='mb-5'>
            <label>Featured Image</label>
            <Input name="featuredImage" placeholder="Featured Image Url" className='py-5' />
          </div>

          {/* Prices */}
          <div className='flex gap-5 mb-5'>
            <div className='w-full'>
              <label>Regular Price</label>
              <Input type='number' name='oldPrice' placeholder='Regular Price' className='py-5' />
            </div>
            <div className='w-full'>
              <label>Sale Price</label>
              <Input type='number' name='price' placeholder='Sale Price' className='py-5' />
            </div>
          </div>

          {/* Category */}
          <div className='mb-5'>
            <label>Category</label>
            <Select name="category">
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              {!loading && (
                <SelectContent>
                  {categories?.map((cat: IProductCategory, idx: number) => (
                    <SelectItem key={idx} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              )}
            </Select>
          </div>

          {/* Short Description */}
          <div className='mb-5'>
            <label>Short Description</label>
            <Textarea name="shortDescription" placeholder='Short Description...' />
          </div>

          {/* Long Description */}
          <div className='mb-5'>
            <label>Long Description</label>
            <Textarea name="longDescription" placeholder='Long Description...' />
          </div>

          {/* Featured Image */}
          <div className='mb-5'>
            <ProductFeaturedImageUploader onChange={setFeaturedImage} />
          </div>

          {/* Submit */}
          <button type='submit' className='bg-green-500 px-5 py-2 text-white'>
            Add Product
          </button>
        </Form>
      </div>
    </div>
  )
}

export default AddProduct
