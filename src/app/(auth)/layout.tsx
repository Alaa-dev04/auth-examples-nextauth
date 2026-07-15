import { Toaster } from "@/components/ui/sonner";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-black  text-white min-h-screen flex flex-col justify-between items-center text-center">
        <main className="flex-1 flex flex-col mx-4 m-24 ">{children}</main>
        <Toaster />
      </div>
    </>
  );
}
