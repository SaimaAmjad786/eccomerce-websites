// import { groq } from "next-sanity";

// export const allProducts = groq `*[_type == "product"]`;
// export const four = groq `*[_type == "product"] [0..3]`;



import { groq } from "next-sanity";

// Fetch all products
export const allProducts = groq`
  *[_type == "product"]
`;

// Fetch the first 4 products
export const fourProducts = groq`
  *[_type == "product"][0..3]
`;
