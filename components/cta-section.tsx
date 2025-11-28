"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const platforms = ["PC", "PlayStation 5", "Xbox Series X|S"]

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-slate-950 text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,184,28,0.1)_0%,transparent_50%)]" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6">
            Ready to Step onto the Pitch?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Join millions of cricket fans and experience the most authentic cricket game ever made.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="rounded-full text-lg px-10 h-14 bg-secondary text-slate-950 hover:bg-secondary/90"
            >
              Buy Now - $59.99
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-lg px-10 h-14 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary"
            >
              Pre-Order Bonus Edition
            </Button>
          </div>

          {/* Platforms */}
          <div>
            <p className="text-sm text-white/70 uppercase tracking-wider mb-4">
              Available on:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="font-semibold">{platform}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
