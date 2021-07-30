import React from "react";
import me from "./img/me.jfif";
import plants from "./img/mymarimo.jpg";

function People() {
  return (
    <React.Fragment>
      <div id="people" class="bg-black pt-5">
        <h2 class="text-2xl text-center text-white font-mono">People</h2>
      </div>
      <section class="text-white bg-black body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/2 lg:mb-0 mb-6 p-3">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="
                    w-20
                    h-20
                    mb-8
                    object-cover object-center
                    rounded-lg
                    inline-block
                    border-2 border-white
                    bg-gray-100
                  "
                  src={me}
                />
                <br />
                <span class="inline-block h-1 w-10 rounded bg-white mt-4 mb-4"></span>
                <h2
                  class="
                    text-white
                    font-medium
                    title-font
                    tracking-wider
                    text-sm
                    font-mono
                  "
                >
                  Taylor Le
                </h2>
                <p class="text-white">Rock Hill, SC</p>
              </div>
            </div>
            <div class="lg:w-1/2 lg:mb-0 mb-6 p-3">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="
                    w-20
                    h-20
                    mb-8
                    object-cover object-center
                    rounded-lg
                    inline-block
                    border-2 border-white
                    bg-gray-100
                  "
                  src={plants}
                />
                <br />
                <span class="inline-block h-1 w-10 rounded bg-white mt-4 mb-4"></span>
                <h2
                  class="
                    text-white
                    font-medium
                    title-font
                    tracking-wider
                    text-sm
                    font-mono
                  "
                >
                  Gilly and Damian
                </h2>
                <p class="text-white">Marimo Moss Balls</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default People;
