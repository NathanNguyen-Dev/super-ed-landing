"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function LandingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogProduct, setDialogProduct] = useState("")

  const handleProductClick = (productName: string) => {
    setDialogProduct(productName)
    setIsDialogOpen(true)
  }

  const scrollToWaitlist = () => {
    setIsDialogOpen(false)
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Hang Tight! We are working on {dialogProduct}!</DialogTitle>
            <DialogDescription>
              This product is currently under development. Join our waitlist to receive updates when it launches.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button type="button" onClick={scrollToWaitlist}>
              Join the Waitlist
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="SuperEd Logo" width={180} height={60} className="h-16 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="#waitlist">Join the Wait List</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Redesigning Education From The Ground Up
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  SuperEd is on a mission to transform how we learn, making education more accessible, engaging, and
                  effective for everyone.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#products">Explore Our Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#waitlist">Join the Wait List</Link>
                </Button>
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="https://discord.gg/xjE2cn5e" target="_blank" rel="noopener noreferrer">
                    Join Our Discord Server
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Our Vision for the Future of Education
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  At SuperEd, we believe that education should be reimagined for the modern world. Our innovative
                  approach combines technology, psychology, and pedagogy to create learning experiences that are
                  personalised, engaging, and effective.
                </p>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  We're building a suite of products that address different aspects of the educational experience, from
                  study planning to interactive learning and gamification.
                </p>
              </div>
              <div className="relative h-[400px] w-full rounded-xl bg-blue-100 overflow-hidden">
                <Image src="/blossoming-learning.png" alt="Education Innovation" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our suite of educational tools designed to transform how we learn.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/cramplan-logo.png"
                      alt="CramPlan Logo"
                      width={50}
                      height={50}
                      className="mr-2"
                    />
                    <CardTitle>CramPlan</CardTitle>
                  </div>
                  <CardDescription>Optimise your study schedule with AI-powered planning</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    CramPlan helps students create effective study schedules based on their learning style, available
                    time, and course requirements. Never cram for an exam again.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="https://super-ed-development.up.railway.app/" target="_blank" rel="noopener noreferrer">
                      Explore CramPlan <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Image src="/images/nova-logo-new.png" alt="NOVA Logo" width={50} height={50} className="mr-2" />
                    <CardTitle>NOVA</CardTitle>
                  </div>
                  <CardDescription>Interactive learning experiences for the digital age</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    NOVA transforms traditional learning materials into interactive, engaging content that adapts to
                    each student's progress and learning style.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleProductClick("NOVA")}>
                    Explore NOVA <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 mr-2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-500"
                      >
                        <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
                        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                      </svg>
                    </div>
                    <CardTitle>GamEd</CardTitle>
                  </div>
                  <CardDescription>Learn through play with educational gaming</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    GamEd makes learning fun through gamification, turning educational content into engaging games that
                    motivate students and improve knowledge retention.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleProductClick("GamEd")}>
                    Explore GamEd <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 bg-slate-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Waitlist</h2>
                <p className="mt-4 md:text-xl">
                  Be the first to know about new features, products, and early access opportunities. Sign up for our
                  waitlist to stay in the loop.
                </p>
              </div>
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-white/30 border-white/40 placeholder:text-white/70 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/30 border-white/40 placeholder:text-white/70 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      I'm interested in
                    </label>
                    <select
                      id="interest"
                      className="w-full h-10 px-3 py-2 bg-white/30 border border-white/40 rounded-md text-white"
                    >
                      <option value="" className="bg-slate-800">
                        Select an option
                      </option>
                      <option value="cramplan" className="bg-slate-800">
                        CramPlan
                      </option>
                      <option value="nova" className="bg-slate-800">
                        NOVA
                      </option>
                      <option value="gamed" className="bg-slate-800">
                        GamEd
                      </option>
                      <option value="all" className="bg-slate-800">
                        All Products
                      </option>
                    </select>
                  </div>
                  <Button className="w-full bg-white text-slate-800 hover:bg-white/90">Join the Wait List</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="SuperEd Logo" width={150} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground md:max-w-xs">
              SuperEd is reimagining education for the modern world, making learning more accessible, engaging, and
              effective.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://super-ed-development.up.railway.app/"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    CramPlan
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => handleProductClick("NOVA")}
                    className="text-sm text-muted-foreground hover:underline text-left"
                  >
                    NOVA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleProductClick("GamEd")}
                    className="text-sm text-muted-foreground hover:underline text-left"
                  >
                    GamEd
                  </button>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-14 md:flex-row md:py-0 px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SuperEd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
