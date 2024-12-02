import Navbar from '@/components/landing/navbar';
import HomePage from '@/components/home/home';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-tr from-[#60078C] to-[#1A0226]">
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}
