
import { Header } from "@/components/layout/Header";
import { Separator } from "@/components/ui/separator";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      <Separator/>
      <main className="w-full max-w-6xl mx-auto p-6 ">{children}</main>
    </div>
  );
}
  