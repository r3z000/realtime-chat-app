import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async ({}) => {
  const sesion = await getServerSession(authOption);

  return <pre>{JSON.stringify(sesion)}</pre>;
};

export default page;
