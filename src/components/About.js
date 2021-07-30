import plants from "./img/mossball.jpg";
import people from "./img/people-playing.jpg";
import reading from "./img/read.jpg";

function About() {
  return (
    <section id="about" class="bg-black pt-1">
      <h2 class="text-2xl text-center text-white font-mono mt-5 mb-3">About</h2>
      <ul class="grid p-10 gap-10 md: grid-cols-3">
        <li class="bg-black overflow-hidden">
          <img src={people} alt="video games" class="w-full rounded-lg" />
          <div class="p-4">
            <h3 class="text-white font-bold font-mono">Gaming</h3>
            <p class="text-white">
              I love playing video games! I play on PC and Nintendo Switch. My
              favorite game right now is Hades.
            </p>
          </div>
        </li>

        <li class="bg-black overflow-hidden">
          <img src={reading} alt="reading" class="w-full rounded-lg" />
          <div class="p-4">
            <h3 class="text-white font-bold font-mono">Reading Manga</h3>
            <p class="text-white">
              I'm currently re-reading Chainsaw Man by Tatsuki Fujimoto.
            </p>
          </div>
        </li>

        <li class="bg-black rounded-lg overflow-hidden">
          <img src={plants} alt="plants" class="w-full rounded-lg" />
          <div class="p-4">
            <h3 class="text-white font-bold font-mono">Plants</h3>
            <p class="text-white">
              I own two marimo moss balls. One is named Gilly while the other is
              named Damian.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default About;
