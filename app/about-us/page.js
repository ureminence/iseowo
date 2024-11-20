import Image from "next/image"
import { Footer } from "@/components/footer"

export default function page() {
    return (
        <main className="py-8 md:py-12 lg:py-16 lg:px-16 px-2 md:px-8">
            <h1> Iseowo. the Freelancer market Place for Artisans</h1>
            <Image width={720} height={380} src="/fx9.jpg" alt="about us picture"/>
            
        </main>
    )
}