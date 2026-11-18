// backend/config/plugins.ts
// Uses Cloudinary for image uploads ONLY when the Cloudinary env variables are set
// (on Render). On your own computer, uploads stay in public/uploads like before.

export default ({ env }: { env: any }) => {
  const useCloudinary = !!env('CLOUDINARY_NAME')

  if (!useCloudinary) {
    return {}
  }

  return {
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  }
}