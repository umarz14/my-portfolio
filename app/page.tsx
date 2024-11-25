import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <WavyBackground className="max-w-max mx-auto pb-40" backgroundFill="#163020"
      colors={["#EEF0E5", "#B6C4B6", "#EEE7DA", "#F2F1EB", "#AFC8AD", "#88AB8E"]}
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hello, I'm Uriel
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Aspiring Software Engineer | Full Stack Developer
      </p>
    </WavyBackground>
  );
}
