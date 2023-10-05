import { createClient } from "next-sanity";

const config = {
    projectId: '4hpgs6eo',
    dataset: "production",
    apiVersion: '2023-09-10',
    useCdn: false
}
const sanityClient = createClient(config)
export default sanityClient;