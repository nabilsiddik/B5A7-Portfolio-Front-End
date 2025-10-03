import { auth } from "@/auth";

export const getCurrentuser = async () => {
  try {
    const session = await auth();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${session?.user?.id}`
    );
    const currentUser = await res.json();

    if (currentUser) {
      return currentUser;
    }

    return null;
  } catch (err: unknown) {
    console.log("error while retriving current user", err);
  }
};
