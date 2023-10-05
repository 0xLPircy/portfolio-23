// skills: name, image

const projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "hostedLink",
      title: "Hosted Link",
      type: "url",
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "url",
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "devfolioLink",
      title: "Devfolio Link",
      type: "url",
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags to tell about project like hackathon or something",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default projects;
