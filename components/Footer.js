import Link from "next/link";

export function Footer() {
    return (
        <Footer className=" flex flex-collg:flex-row lg:justify-between gap-4 bg-white py-4 md:py-6  lg:px-16 px-2 md:px-8">
            <ui className="flex flex-wrap gap-4 md:gap-6">
                <li className="text-xs text-gray-600"><link href="#">Locations</link></li>
                <li className="text-xs text-gray-600"><link href="#">Sitemap</link></li>
                <li className="text-xs text-gray-600"><link href="#">Bug Bounty</link></li>
                <li className="text-xs text-gray-600"><link href="#">Affiliates</link></li>
                <li className="text-xs text-gray-600"><link href="#">T & c</link></li>
                <li className="text-xs text-gray-600"><link href="#">Privacy Policy</link></li>
            </ui>


            <p className="text-xs text-gray-600">&copy; 2024 Iseowo. All Rights Reserved</p>
        </Footer>
    )
}
