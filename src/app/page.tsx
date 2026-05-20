"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { MapPin, Phone, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Why Us",
          id: "why-us",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Samanate Construction"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="Building Excellence in Lagos"
      description="Samanate Construction Limited delivers premium building solutions with precision, integrity, and timely execution for every project."
      buttons={[
        {
          text: "Get a Quote",
          href: "#contact",
        },
        {
          text: "Our Services",
          href: "#services",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/spacious-residential-complex-waterfront-with-reflection-modern-building-construction_169016-69211.jpg?_wi=1"
      mediaAnimation="slide-up"
      imageAlt="construction site professional architecture"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Residential Development",
          description: "High-quality homes built to last, with modern designs for Lagos families.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/building-new-concrete-house_1398-2997.jpg",
            imageAlt: "commercial building construction site",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/raw-concrete-building-construction-against-cloudy-sky_626616-500.jpg",
            imageAlt: "commercial building construction site",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/spacious-residential-complex-waterfront-with-reflection-modern-building-construction_169016-69211.jpg?_wi=2",
          imageAlt: "commercial building construction site",
        },
        {
          title: "Commercial Infrastructure",
          description: "Building sustainable commercial spaces for business success.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/crane-construction-building_1203-2794.jpg",
            imageAlt: "commercial building construction site",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431410.jpg",
            imageAlt: "commercial building construction site",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-agent-advising-clients-office-relocation-leasing_482257-91134.jpg?_wi=1",
          imageAlt: "commercial building construction site",
        },
        {
          title: "Renovation Works",
          description: "Transforming existing structures into modern masterpieces.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/tall-colorful-skycrapers-with-beautiful-blue-sky-background_231208-7623.jpg",
            imageAlt: "commercial building construction site",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/serious-african-american-lady-safety-helmet-standing-near-model-building-table_23-2148039867.jpg",
            imageAlt: "commercial building construction site",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/two-carpenters-with-face-masks-congratulating-each-other-successful-project-workshop_637285-11797.jpg?_wi=1",
          imageAlt: "commercial building construction site",
        },
      ]}
      showStepNumbers={false}
      title="Our Expert Services"
      description="Comprehensive construction services tailored to your specific requirements."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Why Choose Samanate"
      title="Expertise You Can Trust"
      description="We are a registered construction company in Magodo, Lagos, known for 4.8-star quality service."
      subdescription="With years of experience, we pride ourselves on reliability and transparency in every phase of construction."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/steel-bar-site-construction_1150-10127.jpg"
      mediaAnimation="slide-up"
      imageAlt="commercial building construction site"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Kunle Adeyemi",
          handle: "@kunle_a",
          testimonial: "Samanate delivered our office project ahead of schedule. Truly professional.",
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-agent-advising-clients-office-relocation-leasing_482257-91134.jpg?_wi=2",
          imageAlt: "happy client construction project portrait",
        },
        {
          id: "2",
          name: "Titi Balogun",
          handle: "@titi_b",
          testimonial: "Great attention to detail and reliable communication. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-carpenters-with-face-masks-congratulating-each-other-successful-project-workshop_637285-11797.jpg?_wi=2",
          imageAlt: "business project client handshake",
        },
        {
          id: "3",
          name: "Chinedu Okafor",
          handle: "@c_okafor",
          testimonial: "Trustworthy construction partners in Lagos. Will hire again.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-woman-holding-coffee-cup_23-2148230174.jpg",
          imageAlt: "residential building success portrait",
        },
        {
          id: "4",
          name: "Folake Adenuga",
          handle: "@folake_ad",
          testimonial: "Quality materials and skilled craftsmanship. Very satisfied.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-people-working-warehouse_329181-12852.jpg",
          imageAlt: "project site happy client",
        },
        {
          id: "5",
          name: "Babatunde Ade",
          handle: "@baba_ade",
          testimonial: "Top tier project management for our residential estate.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-people-giving-fist-bump_53876-25109.jpg",
          imageAlt: "commercial development client success",
        },
      ]}
      title="Client Success Stories"
      description="See why clients trust us with their biggest projects."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Where are you based?",
          content: "We are located at Plot 11, Adigun Avenue, Ayodele Ipaye St, Magodo Phase 1, Lagos.",
        },
        {
          id: "2",
          title: "What are your operating hours?",
          content: "We are open Monday to Friday, 8am–5pm and Saturday 10am–4pm.",
        },
        {
          id: "3",
          title: "How can I get a quote?",
          content: "You can fill out our contact form or call us directly at 0802 752 8211.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about starting your project with us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "4.8",
          description: "Avg Rating",
        },
        {
          id: "m2",
          value: "24+",
          description: "Completed Projects",
        },
        {
          id: "m3",
          value: "100%",
          description: "Client Satisfaction",
        },
      ]}
      title="Our Impact"
      description="Proven results for construction excellence."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Start Your Project Today"
      description="Ready to build your future? Let's discuss your requirements."
      imageSrc="http://img.b2bpic.net/free-photo/sunroof-with-tensioners_1127-2102.jpg"
      mediaAnimation="slide-up"
      tag="Contact Us"
      imageAlt="modern office building professional"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Samanate Construction"
      copyrightText="© 2024 Samanate Construction Limited"
      socialLinks={[
        {
          icon: Phone,
          href: "tel:08027528211",
          ariaLabel: "Call us",
        },
        {
          icon: MapPin,
          href: "https://maps.google.com",
          ariaLabel: "View Directions",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
