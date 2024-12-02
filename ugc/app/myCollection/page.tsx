import Navbar from '@/components/landing/navbar';
import Upload from '@/components/myCollection/upload';
import Footer from '@/components/landing/footer';
import Up from '@/components/myCollection/up'

export default async function myCollection() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-tr from-[#60078C] to-[#1A0226]">
      <Navbar />
      {/* <Up /> */}
      <Upload />
      <Footer />
    </main>
  );
}
