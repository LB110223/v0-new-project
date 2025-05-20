"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Settings, Layout, Users, MessageSquare, BarChart, FileText, ImageIcon } from "lucide-react"

export default function AdminHome() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")

  // Mot de passe simple pour l'administration
  const ADMIN_PASSWORD = "SmartImpulsion2023"

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà authentifié
    const authStatus = localStorage.getItem("admin_authenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin_authenticated", "true")
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Mot de passe incorrect")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated")
    setIsAuthenticated(false)
    setPassword("")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Administration Smart Impulsion</CardTitle>
            <CardDescription>Veuillez vous connecter pour accéder au panneau d'administration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Mot de passe
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleLogin()
                  }}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin} className="w-full">
              Se connecter
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const adminModules = [
    {
      title: "Informations générales",
      description: "Modifier les informations générales du site",
      icon: <Settings className="h-6 w-6" />,
      href: "/admin/general",
    },
    {
      title: "Section Hero",
      description: "Modifier le contenu de la section d'accueil",
      icon: <Layout className="h-6 w-6" />,
      href: "/admin/hero",
    },
    {
      title: "Services",
      description: "Gérer les services proposés",
      icon: <FileText className="h-6 w-6" />,
      href: "/admin/services",
    },
    {
      title: "Résultats & Études de cas",
      description: "Modifier les études de cas et résultats",
      icon: <BarChart className="h-6 w-6" />,
      href: "/admin/case-studies",
    },
    {
      title: "Témoignages",
      description: "Gérer les témoignages clients",
      icon: <MessageSquare className="h-6 w-6" />,
      href: "/admin/testimonials",
    },
    {
      title: "Équipe",
      description: "Gérer les membres de l'équipe",
      icon: <Users className="h-6 w-6" />,
      href: "/admin/team",
    },
    {
      title: "Médias",
      description: "Gérer les images et médias du site",
      icon: <ImageIcon className="h-6 w-6" />,
      href: "/admin/media",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Panneau d'administration</h1>
            <p className="text-gray-500">Gérez le contenu de votre site Smart Impulsion</p>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au site
              </Button>
            </Link>
            <Button variant="ghost" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminModules.map((module, index) => (
            <Link href={module.href} key={index} className="block">
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-700">{module.icon}</div>
                    <CardTitle>{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{module.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Smart Impulsion - Panneau d'administration</p>
          <p>Version 1.0</p>
        </div>
      </div>
    </div>
  )
}
