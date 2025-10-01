export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/project`);

    if (!res.ok) {
      console.error("Failed to fetch projects:", res.status, await res.text());
      return [];
    }

    const projects = await res.json();
    return projects;
  } catch (err: unknown) {
    console.log(err);
  }
};
