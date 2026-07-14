/// auth is an async function that we have to use await to use
import { auth } from "@/src/auth";
import { redirect } from "next/navigation";
import Logout from "@/src/components/logout";
import Image from "next/image";
const Home = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const user = session.user;

  return (
    <div className="flex flex-col items-center justify-between m-4">
      <h1 className="text-4xl">hello {user.name}</h1>
      <Image
        src={user.image ?? ""}
        alt={user.name ?? "Profile"}
        width={120}
        height={120}
        className="rounded-full m-7"
      />
      <Logout/>
    </div>
  );
};

export default Home;
