"use client"

import { Badge } from '@/components/ui/badge'
import { Play } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { motion, type Variants } from "motion/react"

// Animation variants for staggered children
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",  // Using named easing instead of custom bezier
        },
    },
}

const scaleInVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

const Hero = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Introducing ChatDeck */}
            <motion.div
                className="flex items-center justify-center"
                variants={fadeUpVariants}
            >
                <Badge className="h-auto text-sm font-medium px-4 py-2 " variant={'outline'}>
                    Trusted by 10k+ websites worldwide 🎉
                </Badge>
            </motion.div>

            {/* Hero Text */}
            <div className="text-center mt-8">
                <motion.h1
                    className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
                    variants={fadeUpVariants}
                >
                    AI Chatbot for Customer Support.
                </motion.h1>
                <motion.p
                    className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    variants={fadeUpVariants}
                >
                    It&apos;s like ChatGPT, but trained specifically on YOUR website. Automate your customer support & boost your customer&apos;s satisfaction. No Coding Required.
                </motion.p>
            </div>

            {/* Hero Actions */}
            <motion.div
                className="my-6 mb-12 flex items-center justify-center gap-x-4"
                variants={fadeUpVariants}
            >
                <ShimmerButton>Try For Free</ShimmerButton>
            </motion.div>

            {/* Static video preview; clicking does not open a modal. */}
            <motion.div className="relative" variants={scaleInVariants}>
                <div className="relative block dark:hidden">
                    <img
                        src="https://startup-template-sage.vercel.app/hero-light.png"
                        alt="ChatDeck product video preview"
                        width={1920}
                        height={1080}
                        className="w-full rounded-md border shadow-lg"
                    />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
                            <div className="flex size-20 items-center justify-center rounded-full bg-primary shadow-md">
                                <Play className="size-8 fill-white text-white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden dark:block">
                    <img
                        src="https://startup-template-sage.vercel.app/hero-dark.png"
                        alt="ChatDeck product video preview"
                        width={1920}
                        height={1080}
                        className="w-full rounded-md border shadow-lg"
                    />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
                            <div className="flex size-20 items-center justify-center rounded-full bg-primary shadow-md">
                                <Play className="size-8 fill-white text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Hero
