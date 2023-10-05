const experience = {
    name: "experience",
    title: "Work Experience",
    type: "document",
    fields: [
        {
            name: "company",
            title: "Company",
            type: "string",

        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "company" }
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "string"
        },
        {
            name: "endDate",
            title: "End Date",
            type: "string"
        },
        {
            name: "title",
            title: "Job Title",
            type: "string"
        },
        {
            name: "location",
            title: "Job Location",
            type: "string"
        },
        {
            name: "technologies",
            title: "Technologies Used",
            type: "string"
        },
        {
            name: 'description',
            title: 'Description (each bullet in different index)',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}

export default experience