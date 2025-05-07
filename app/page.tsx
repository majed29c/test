import Navbar from "@/components/Navbar";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import AboutMe from "@/components/About";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { CodeBlockDemo } from "@/components/CodeBlockDemo";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div >
     <Navbar />
     <BackgroundLinesDemo />
     <AboutMe />
     <CardHoverEffectDemo/>
     <CodeBlockDemo />
     <Footer />
    </div>
  );
}
