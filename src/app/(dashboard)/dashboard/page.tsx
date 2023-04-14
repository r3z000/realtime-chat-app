import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async ({}) => {
  const sesion = await getServerSession(authOptions);

  return <div>Dashboard</div>;
};

export default page;
