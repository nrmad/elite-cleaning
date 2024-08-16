"use client";

import { ReactNode } from "react";

import Link from "next/link";
import SocialLogo from "social-logos";
import { Separator } from "@radix-ui/react-separator";
import { CopyrightIcon } from "lucide-react";
import { TypographyH4 } from "./ui/typographyH4";
import { TypographyP } from "./ui/typographyP";

interface MyProps {
  children?: ReactNode;
}

export function Footer(props: MyProps) {
  // TODO: add in buttons for both app stores later

  // below left aligned details and link for app
  return (
    <div className="w-full bg-theme h-96 flex flex-col justify-between pt-20">
      {/* <div className="w-10 h-10 bg-[#01456a] border-black border-solid "></div> */}
      <div className="w-full flex justify-center pl-8 pr-8">
        <div className="w-full  max-w-screen-xl flex space-x-24 ">
          <div className="w-1/5 text-primary-foreground flex flex-col ">
            <TypographyH4 className="">Elite Cleaning</TypographyH4>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Sustainability</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/5 flex flex-col text-primary-foreground">
            <TypographyH4 className=" ">Help</TypographyH4>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/contact">FAQs</Link>
              </li>
              <li>
                <Link href="/contact">Help Centre</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/5 flex flex-col text-primary-foreground">
            <TypographyH4 className="">Connect</TypographyH4>
            <div className="flex mt-4 space-x-4">
              <Link href="/facebook">
                <SocialLogo
                  icon="facebook"
                  size={24}
                  className="fill-primary-foreground "
                />
              </Link>
              <Link href="/linkedin">
                <SocialLogo
                  icon="linkedin"
                  size={24}
                  className="fill-primary-foreground"
                />
              </Link>
              <Link href="/instagram">
                <SocialLogo
                  icon="instagram"
                  size={24}
                  className="fill-primary-foreground"
                />
              </Link>
            </div>

            {/* <ul className='mt-4 space-y-4'>
                    <li><Link href="/faqs">FAQs</Link></li>
                    <li><Link href="/help">Help Centre</Link></li>
                    <li><Link href="/help">Contact Us</Link></li>
                </ul> */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <Separator
          orientation="horizontal"
          className="w-full h-[1px] bg-primary-foreground "
        />

        <div className="w-full flex h-20 justify-between max-w-screen-xl text-primary-foreground pl-8 pr-8">
          <div className="flex space-x-4">
            <div className="h-full flex items-center">
              <Link href="/facebook">
                <TypographyP>Privacy Policy</TypographyP>
              </Link>
            </div>
            <div className="h-full flex items-center">
              <Link href="/facebook">
                <TypographyP>Cookie Policy</TypographyP>
              </Link>
            </div>

            <div className="h-full flex items-center">
              <Link href="/facebook">
                <TypographyP>Terms of Service</TypographyP>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <CopyrightIcon className="w-4 h-4" />
            <p className="text-xs">2024 Elite Cleaning. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
