import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Reviews } from "@/components/reviews";
import { ChatbotSection } from "@/components/chatbot-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <ChatbotSection />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
