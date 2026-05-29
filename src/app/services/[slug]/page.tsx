import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { ServiceLibrary } from "@/components/services/ServiceLibrary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const cleanDescription = service.shortDescription.replace(/\*\*/g, "");
  return {
    title: `${service.title} — The Above Mindset`,
    description: cleanDescription,
    openGraph: {
      title: `${service.title} — The Above Mindset`,
      description: cleanDescription,
      type: "website",
      siteName: "The Above Mindset",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <ServiceLibrary service={service} />
      <Footer />
    </>
  );
}
