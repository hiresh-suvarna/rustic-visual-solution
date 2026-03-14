import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import React from "react";
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
