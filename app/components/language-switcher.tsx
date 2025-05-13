"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  language: string
  setLanguage: (language: string) => void
}

export default function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  const languages = [
    { code: "english", label: "English" },
    { code: "hindi", label: "हिंदी" },
    { code: "gujarati", label: "ગુજરાતી" },
    { code: "marathi", label: "मराठी" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)?.label || "English"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex gap-1 items-center">
          <Globe className="h-4 w-4 text-orange-700" />
          <span className="hidden md:inline">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-amber-100" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
