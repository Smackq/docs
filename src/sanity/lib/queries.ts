import { defineQuery } from "next-sanity";

export const CONTRACT_QUERY = defineQuery(`
    *[_type == "contract" && defined(slug.current)] | order(_createdAt desc)
{
  _createdAt,
    _id,
    title,
    description,
    slug,
    category,
    imageUrl,
    "fileUrl": file.asset->url,
}`)

export const CONTRACT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "contract" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    description,
    slug,
    category,
    imageUrl,
    "fileUrl": file.asset->url
  }
`);