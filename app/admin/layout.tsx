import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = cookies();
    const token = cookieStore.get("sfin_admin_token")?.value;
    const secret = process.env.JWT_SECRET!;

    if (!token) redirect("/admin/login");

    try {
        jwt.verify(token, secret);
    } catch (err) {
        redirect("/admin/login");
    }

    return <>{children}</>;
}
