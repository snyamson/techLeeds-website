import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "wkieywbi",
  dataset: "production",
  useCdn: true,
});
