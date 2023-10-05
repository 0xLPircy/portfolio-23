import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from '@sanity/vision'


const config = defineConfig({
    title: 'My personal Website',
    projectId: '4hpgs6eo',
    dataset: 'production',
    apiVersion: '2023-09-10',
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas }
})


export default config