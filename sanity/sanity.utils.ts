import { createClient, groq } from "next-sanity";
import sanityClient from "./config/client.config";


export async function getProjects() {
    try {
        const data = await sanityClient.fetch(
            groq`*[]`, {
            next: {
                revalidate: 1
            }
        }
        )
        // await sanityClient.fetch(
        //     groq`*[_type == "projects"]{
        //     _id,
        //     _createdAt,
        //     "slug": slug.current,
        //     name,
        //     description,
        //     hostedLink,
        //     githubLink,
        //     devfolioLink,
        //     technologies,
        //     tags
        // }`
        // )
        return data
    } catch (error) {
        console.log("ERROR OCCURED:", error)
    }
}