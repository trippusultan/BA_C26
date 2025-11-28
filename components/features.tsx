"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Users, Globe, User, MapPin, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "Advanced Gameplay",
    description: "Revolutionary control system with precise shot selection, timing mechanics, and realistic ball physics."
  },
  {
    icon: Users,
    title: "Motion Capture",
    description: "Real player movements captured with cutting-edge technology for authentic animations."
  },
  {
    icon: Globe,
    title: "Licensed Teams",
    description: "Official licenses for international teams, domestic leagues, and historic squads."
  },
  {
    icon: User,
    title: "Career Mode",
    description: "Build your legacy from club cricket to international stardom with deep RPG elements."
  },
  {
    icon: MapPin,
    title: "Stadium Creator",
    description: "Design and customize your own cricket grounds with advanced editing tools."
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Comprehensive statistics, heat maps, and performance analysis to refine your strategy."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
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
            Groundbreaking Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience cricket with unprecedented realism and depth
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
