import { defineType, defineField } from 'sanity'

export const contract = defineType({
  name: "contract",
  title: "Contract",
  type: "document",
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      },
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "imageUrl",
      type: "url",
    }),
    defineField({
      name: "category",
      type: "string",
    }),
    defineField({
      name: "file",
      type: "file",
    }),
  ],
  preview: {
    select: {
      title: "title"
    }
  }
})
