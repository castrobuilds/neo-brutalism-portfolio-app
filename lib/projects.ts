import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "data/projects");

export function getAllProjects() {
  const projectFolders = fs.readdirSync(projectsDirectory);

  return projectFolders.map((folder) => {
    const filePath = path.join(projectsDirectory, folder, "index.md");
    const fileContent = fs.readFileSync(filePath, "utf8");

    // "matter" parses the top of your markdown (metadata)
    const { data, content } = matter(fileContent);

    return {
      slug: folder,
      ...data, // title, tags, coverImage
      content,
    };
  });
}
