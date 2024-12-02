'use client';
import { useState, useEffect } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { GiMagicAxe } from 'react-icons/gi';
import Logo from '@/public/logo.svg';
import Image from 'next/image';
import { getSession, signOut } from 'next-auth/react';
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/theme-switcher'

interface NavbarProps {
  bgColor?: string;
}

export default function Navbar({ bgColor = '#110219' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      setSession(sessionData);
      setLoading(false);
    }
    fetchSession();
  }, []);

  async function getSessionData() {
    const sessionData = await getSession();
  }
  getSessionData();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (isOpen) toggleMenu(); // Close menu on link click for mobile
  };

  return (
    <header
      className="py-3 text-white font-proxima-nova"
      style={{ backgroundColor: bgColor }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Logo"
                width={224}
                height={224}
                className="w-56 h-56"
              />
            </Link>
          </div>
          <div className="hidden ml-5 md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className={`text-md ${
                activeLink === 'home'
                  ? 'text-fuchsia-600'
                  : 'hover:text-fuchsia-600'
              }`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
            <Link
              href="/myCollection"
              className={`text-md ${
                activeLink === 'myCollection'
                  ? 'text-fuchsia-600'
                  : 'hover:text-fuchsia-600'
              }`}
              onClick={() => handleLinkClick('myCollection')}
            >
              My Collection
            </Link>
            <ThemeSwitcher />
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <GiMagicAxe className="h-6 w-6" />
              ) : (
                <CiMenuFries className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === 'home' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
            <Link
              href="/myCollection"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === 'myCollection' ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => handleLinkClick('myCollection')}
            >
              My Collection
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
