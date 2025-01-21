// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }


import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { dataset, projectId } from '../env'

// Initialize the image URL builder
const builder = createImageUrlBuilder({ projectId, dataset })

// Generate image URL with optional transformations
export const urlFor = (source: SanityImageSource, width?: number, height?: number) => {
  let imageUrl = builder.image(source)
  
  if (width) {
    imageUrl = imageUrl.width(width)
  }
  if (height) {
    imageUrl = imageUrl.height(height)
  }

  return imageUrl.url()
}
