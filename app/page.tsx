
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionOneRTL from "@/components/About/AboutSectionOneRTL";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import LocationSystem from "@/components/LocationSystem";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Logo3i from "../public/images/logo/logo.png";
import {  ResolvingMetadata  ,type Metadata} from 'next'


type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> { 
  const previousImages = (await parent).openGraph?.images || []

  return {
    openGraph: {
      images: [Logo3i.src, ...previousImages],
    },
  }
}

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionOneRTL />
      {/* <AboutSectionTwo /> */}
      <Services />
      <Features />
      <Video />
      <Brands />
      {/* <Testimonials /> */}
      <Pricing />
      <Blog />
      <Contact />
      <LocationSystem />
    </>
  );
}
