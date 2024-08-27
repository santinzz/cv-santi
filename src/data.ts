import Github from "./icons/Github.astro"
import Mail from "./icons/Mail.astro"
import Phone from "./icons/Phone.astro"

export type SocialLink = {
  id: number
  label: string
  Icon: any
  link: string
}

export const socialLinks = [
  { id: 1, label: "GitHub", Icon: Github, link: "https://github.com/santinzz" },
  { id: 2, label: "Mail", Icon: Mail, link: "mailto:santiagogonuz@gmail.com" },
  { id: 3, label: "+52 866 173 7036", Icon: Phone, link: "tel:+52 866 173 7036" },
] as SocialLink[]