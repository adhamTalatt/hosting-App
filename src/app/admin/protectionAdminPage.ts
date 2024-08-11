import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyTokenforPage } from "@/utils/verifyToken";

export const protectionAdminPage = () => {
  const token = cookies().get("jwtToken")?.value || undefined;
  if (!token) redirect("/");
  const payload = verifyTokenforPage(token);
  if (payload?.isAdmin === false) redirect("/");
};
