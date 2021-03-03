export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-nextjs-landing-pages",
      },
    },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "603ee36619abb471f4db2a13",
                  title: "Sanity Studio",
                  name: "sanity-nextjs-landing-pages-studio-hes3gdax",
                  apiId: "219a9bb2-1fb3-46ee-899a-67a5abfcc707",
                },
                {
                  buildHookId: "603ee3671595706d09f480b6",
                  title: "Landing pages Website",
                  name: "sanity-nextjs-landing-pages-web-fwpsfnjv",
                  apiId: "871e1075-769d-4a35-8194-3ffc96e03adf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/DoctorDerek/sanity-nextjs-landing-pages",
            category: "Code",
          },
          {
            title: "Frontend",
            value:
              "https://sanity-nextjs-landing-pages-web-fwpsfnjv.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recently edited",
        order: "_updatedAt desc",
        limit: 10,
        types: ["page"],
      },
      layout: { width: "medium" },
    },
  ],
}
