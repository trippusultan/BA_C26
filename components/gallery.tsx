"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const galleryItems = [
  { title: "Stadium View", gradient: "from-blue-600 to-cyan-600" },
  { title: "Gameplay Action", gradient: "from-green-600 to-emerald-600" },
  { title: "Player Close-up", gradient: "from-purple-600 to-pink-600" },
  { title: "Night Match", gradient: "from-orange-600 to-red-600" },
  { title: "Celebration", gradient: "from-yellow-600 to-orange-600" },
  { title: "Crowd Atmosphere", gradient: "from-indigo-600 to-blue-600" }
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Visual Excellence
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Stunning graphics powered by next-gen technology
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={`aspect-video bg-gradient-to-br ${item.gradient} border-0 overflow-hidden cursor-pointer group`}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <p className="text-2xl font-semibold relative z-10">
                    {item.title}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
