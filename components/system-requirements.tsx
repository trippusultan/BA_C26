"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Cpu, HardDrive, Zap } from "lucide-react"

const requirements = [
  {
    type: "Minimum",
    specs: [
      { label: "OS", value: "Windows 10 64-bit", icon: Monitor },
      { label: "Processor", value: "Intel Core i5-6600K / AMD Ryzen 5 1600", icon: Cpu },
      { label: "Memory", value: "8 GB RAM", icon: Zap },
      { label: "Graphics", value: "NVIDIA GTX 1050 Ti / AMD RX 570", icon: Monitor },
      { label: "DirectX", value: "Version 12", icon: Monitor },
      { label: "Storage", value: "50 GB available space", icon: HardDrive }
    ]
  },
  {
    type: "Recommended",
    specs: [
      { label: "OS", value: "Windows 11 64-bit", icon: Monitor },
      { label: "Processor", value: "Intel Core i7-9700K / AMD Ryzen 7 3700X", icon: Cpu },
      { label: "Memory", value: "16 GB RAM", icon: Zap },
      { label: "Graphics", value: "NVIDIA RTX 3060 / AMD RX 6700 XT", icon: Monitor },
      { label: "DirectX", value: "Version 12", icon: Monitor },
      { label: "Storage", value: "50 GB SSD", icon: HardDrive }
    ],
    recommended: true
  }
]

export function SystemRequirements() {
  return (
    <section id="requirements" className="py-20 bg-slate-50">
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
            System Requirements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make sure your system is ready for Cricket 26
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className={`relative ${req.recommended ? 'border-2 border-primary shadow-lg' : ''}`}>
                {req.recommended && (
                  <div className="absolute -top-4 right-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{req.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {req.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start gap-3 pb-3 border-b last:border-0">
                        <spec.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <span className="font-semibold text-primary">{spec.label}:</span>{" "}
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
