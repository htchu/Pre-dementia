"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-primary-700 to-accent-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:opacity-90">
          失智照護助手
        </Link>

        {/* 手機選單按鈕 */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* 桌面版導覽列 */}
        <nav className="hidden md:flex gap-6 text-lg">
          <Link href="/project" className="hover:opacity-80 transition">
            計畫介紹
          </Link>
          <Link href="/consent" className="hover:opacity-80 transition">
            知情同意書
          </Link>
          <Link href="/care-log" className="hover:opacity-80 transition">
            照護紀錄
          </Link>
          <Link href="/chatbot" className="hover:opacity-80 transition">
            AI 助理
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition">
            聯絡我們
          </Link>
        </nav>
      </div>

      {/* 手機版選單 */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary-800 px-4 py-4 flex flex-col gap-3 text-lg">
          <Link
            href="/project"
            className="hover:opacity-80 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            計畫介紹
          </Link>
          <Link
            href="/consent"
            className="hover:opacity-80 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            知情同意書
          </Link>
          <Link
            href="/care-log"
            className="hover:opacity-80 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            照護紀錄
          </Link>
          <Link
            href="/chatbot"
            className="hover:opacity-80 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            AI 助理
          </Link>
          <Link
            href="/contact"
            className="hover:opacity-80 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            聯絡我們
          </Link>
        </nav>
      )}
    </header>
  );
}
