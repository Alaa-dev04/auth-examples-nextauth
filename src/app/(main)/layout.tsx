import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/src/components-pages/navbar";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-black  text-white min-h-screen flex flex-col justify-between items-center text-center">
        <Navbar />
        <main className="flex-1 flex flex-col mx-4 m-24 ">{children}</main>
        <Toaster />
      </div>
    </>
  );
}
