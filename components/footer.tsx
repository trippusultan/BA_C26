"use client"

import * as React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  game: [
    { label: "Features", href: "#features" },
    { label: "Game Modes", href: "#game-modes" },
    { label: "Gallery", href: "#gallery" },
    { label: "Requirements", href: "#requirements" }
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Bug Reports", href: "#" },
    { label: "Contact Us", href: "#" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "EULA", href: "#" }
  ]
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4">
              CRICKET <span className="text-secondary">26</span>
            </h3>
            <p className="text-white/70 mb-6">
              The ultimate cricket gaming experience from Big Ant Studios.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary hover:text-slate-950 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Game Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Game</h4>
            <ul className="space-y-2">
              {footerLinks.game.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        {/* Bottom Footer */}
        <div className="text-center text-sm text-white/50">
          <p>© 2026 Big Ant Studios. All rights reserved. Cricket 26 is a trademark of Big Ant Studios.</p>
        </div>
      </div>
    </footer>
  )
}
