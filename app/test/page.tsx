import { auth } from "@/auth";

const page = async () => {
  const session = await auth();

  return <div></div>;
};

export default page;
