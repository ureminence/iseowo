import Link from "next/link";

export function GeneralFooter() {
    return (
        <footer className=" flex flex-collg:flex-row lg:justify-between gap-4 bg-white py-4 md:py-6  lg:px-16 px-2 md:px-8">
            <ui className="flex flex-wrap gap-4 md:gap-6">
                <li className="text-xs text-gray-600"><Link href="#">Locations</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">Sitemap</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">Bug Bounty</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">Affiliates</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">T & c</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">Privacy Policy</Link></li>
            </ui>


            <p className="text-xs text-gray-600">&copy; 2024 Iseowo. All Rights Reserved</p>
        </footer>
    )
}
