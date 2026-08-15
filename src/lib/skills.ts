const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillRow {
  label: string;
  skills: Skill[];
}

export const skillRows: SkillRow[] = [
  {
    label: "Frontend & Frameworks",
    skills: [
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "React.js", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DEVICON}/express/express-original.svg` },
      { name: "C#", icon: `${DEVICON}/csharp/csharp-original.svg` },
      { name: ".NET Core", icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
    ],
  },
  {
    label: "Languages & Databases",
    skills: [
      { name: "C", icon: `${DEVICON}/c/c-original.svg` },
      { name: "C++", icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: "SQL", icon: "" },
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "Microsoft SQL Server", icon: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
      { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Azure Cosmos DB", icon: `${DEVICON}/azure/azure-original.svg` },
      { name: "Prisma", icon: `${DEVICON}/prisma/prisma-original.svg` },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Mongoose", icon: `${DEVICON}/mongoose/mongoose-original.svg` },
      { name: "Entity Framework Core", icon: `${DEVICON}/entityframeworkcore/entityframeworkcore-original.svg` },
      { name: "Bootstrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
      { name: "Socket.IO", icon: `${DEVICON}/socketio/socketio-original.svg` },
      { name: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure DevOps", icon: `${DEVICON}/azuredevops/azuredevops-original.svg` },
      { name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
    ],
  },
];
