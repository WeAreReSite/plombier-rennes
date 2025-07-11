// NavBar.tsx
"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <NavbarSection scrolled={scrolled} />;
}

const NavbarSection = ({
  scrolled,
}: {
  scrolled: boolean;
}) => {
  const navItems = [
    { name: "Accueil", link: "/" },
    { name: "À Propos", link: "/a-propos" },
    { name: "Services", link: "/#services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <DesktopNav navItems={navItems} scrolled={scrolled} />
      <MobileNav navItems={navItems} scrolled={scrolled} />
    </>
  );
};


const DesktopNav = ({
  navItems,
  scrolled,
}: {
  navItems: { name: string; link: string }[];
  scrolled: boolean;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const buttonStyles = [
    "px-8 py-3 text-base text-white font-semibold rounded-lg shadow-lg",
    "transform transition-all duration-300 ease-in-out",
    "bg-blue-700 hover:bg-blue-800",
    "focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2",
    "hover:scale-105 hover:-translate-y-0.5"
  ];

  return (
    <motion.nav
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto hidden h-20 w-full max-w-7xl",
        "flex flex-row items-center px-6 py-4 transition-colors duration-300 lg:flex",
        scrolled ? "bg-white shadow-md dark:bg-neutral-950" : "bg-transparent"
      )}
      role="navigation"
      aria-label="Navigation principale"
    >
      <Logo />

      <div className="ml-10 flex flex-row items-center space-x-2 text-base">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            className={cn(
              "relative px-5 py-3 rounded-lg",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            )}
            aria-label={`Naviguer vers ${item.name}`}
          >
            {hovered === idx && (
              <motion.span
                layoutId="hovered"
                className="absolute inset-0 bg-indigo-100 dark:bg-neutral-800"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className={cn(
                "relative z-10 flex items-center gap-1 font-medium transition-colors duration-300",
                hovered === idx 
                    ? "text-indigo-600 dark:text-indigo-400" 
                    : "text-slate-700 dark:text-slate-300"
              )}
            >
              {item.name}
              {item.name === "All Pages" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              )}
            </span>
          </Link>
        ))}
      </div>

      <div className="ml-auto" />

      <Link href="/contact">
        <button className={cn(
          "hidden lg:block",
          ...buttonStyles
        )}
        aria-label="Aller à la page de contact"
        >
          Contactez Nous
        </button>
      </Link>
    </motion.nav>
  );
};



const MobileNav = ({
  navItems,
  scrolled,
}: {
  navItems: { name: string; link: string }[];
  scrolled: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const buttonStyles = [
    "px-8 py-3 text-base text-white font-semibold rounded-lg shadow-lg",
    "transform transition-all duration-300 ease-in-out",
    "bg-blue-700 hover:bg-blue-800",
    "focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2",
    "hover:scale-105 hover:-translate-y-0.5"
  ];


  return (
    <>
      <motion.nav
        animate={{ borderRadius: open ? "0.5rem" : "2rem" }}
        key={String(open)}
        className={cn(
          "fixed inset-x-0 top-2 z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col",
          "items-center justify-between px-4 py-2 transition-colors duration-300 lg:hidden",
          scrolled || open ? "bg-white dark:bg-neutral-950 shadow-lg" : "bg-transparent",
          open ? "rounded-lg" : "rounded-full"
        )}
        role="navigation"
        aria-label="Navigation mobile"
      >
        <div className="flex w-full flex-row items-center justify-between h-12">
          <Logo />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? (
              <IconX className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
            ) : (
              <IconMenu2 className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-16 z-20 flex w-full flex-col gap-3 rounded-b-lg bg-white px-4 pb-6 pt-2 dark:bg-neutral-950"
            >
              {navItems.map((item, idx) => (
                <Link 
                    key={idx} 
                    href={item.link} 
                    onClick={handleLinkClick}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-neutral-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-indigo-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`Naviguer vers ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="block mt-2">
                <button 
                  onClick={handleLinkClick}
                  className={cn(
                    "w-full",
                    ...buttonStyles
                  )}
                  aria-label="Aller à la page de contact"
                >
                  Contactez Nous
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};


const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2"
      aria-label="Retour à l'accueil - AquaNova"
    >
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
        className="dark:invert"
      />
      <span className="font-semibold text-lg text-black dark:text-white">AquaNova</span>
    </Link>
  );
};