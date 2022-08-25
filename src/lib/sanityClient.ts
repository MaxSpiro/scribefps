import sanityClient from '@sanity/client';

export const client = new sanityClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: 'development',
  apiVersion: '2022-08-24',
  useCdn: false,
});

export const getUrlByRef = async (ref: string) => {
  const res = await client.fetch(`*[_id == "${ref}"]`);
  return res[0].url;
};
