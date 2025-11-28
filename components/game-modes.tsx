"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Target, Globe2, CheckCircle2 } from "lucide-react"

const modes = [
  {
    icon: Target,
    title: "Career Mode",
    description: "Rise from amateur to legend. Shape your career path, manage relationships, and become the greatest cricketer of all time.",
    features: [
      "Create and customize your player",
      "Dynamic storylines and choices",
      "Skill progression system",
      "Team selection and contract negotiations"
    ]
  },
  {
    icon: Trophy,
    title: "Tournament Mode",
    description: "Compete in World Cups, T20 leagues, and historic tournaments. Relive classic moments or create new history.",
    features: [
      "Official tournament structures",
      "Custom tournament creator",
      "Realistic knockout stages",
      "Trophy celebrations and ceremonies"
    ]
  },
  {
    icon: Globe2,
    title: "Online Multiplayer",
    description: "Challenge players worldwide in ranked matches, leagues, and friendly contests. Climb the leaderboards.",
    features: [
      "Ranked competitive matches",
      "Online leagues and seasons",
      "Co-op gameplay modes",
      "Global leaderboards"
    ]
  }
]

export function GameModes() {
  return (
    <section id="game-modes" className="py-20 bg-background">
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
            Multiple Ways to Play
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From quick matches to epic tournaments
          </p>
        </motion.div>

        {/* Modes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/5 to-transparent border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <mode.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{mode.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {mode.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mode.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
