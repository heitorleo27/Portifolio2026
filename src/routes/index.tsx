import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Heitor Novaes — QA Intern & Software Development Student" },
      {
        name: "description",
        content:
          "Personal portfolio of Heitor Novaes — QA Intern at Di2win, Systems Analysis student. Projects, skills and contact.",
      },
      { property: "og:title", content: "Heitor Novaes — Portfolio" },
      {
        property: "og:description",
        content: "QA Intern & Software Development Student. Software testing, APIs, and learning every day.",
      },
    ],
  }),
});

export default Portfolio;