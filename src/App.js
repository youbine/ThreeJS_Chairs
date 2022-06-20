import "./App.scss";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/all";
import SmallChairs from "./components/SmallChairs";
import BigChair from "./components/BigChair";
import { useEffect, useRef } from "react";

export default function App() {
  const ref = useRef();
  const q = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1,
    });
    gsap.set("body", {
      background: "linear-gradient(to right, #4b6cb7, #182848)",
    });
    q(".section").forEach((el, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          toggleActions: "play pause restart reverse",
        },
      });
      tl.to("body", {
        background:
          i === 1
            ? "linear-gradient(to right, #ed4264, #ffedbc)"
            : i === 2
            ? "linear-gradient(to right, #3ca55c, #b5ac49)"
            : i === 3
            ? "linear-gradient(to right, #757f9a, #d7dde8)"
            : "linear-gradient(to right, #4b6cb7, #182848)",
      });
    });

    return () => {
      smoother.kill();
    };
  }, [q]);

  return (
    <>
      <div ref={ref} id="smooth-wrapper">
        <div id="smooth-content">
          <div className="section miniWrap">
            <SmallChairs />
            <div className="text minichairs">
              <span>looking for good chairs?</span>
            </div>
            <div className="mouse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                className="bi bi-mouse"
                viewBox="0 0 16 16"
              >
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
              </svg>
              360°
            </div>
          </div>
          <div className="section">
            <BigChair imgurl={"/armchairYellow.gltf"} />
            <div className="text">
              <span>Simple Design</span>
              <span>Office & Home</span>
            </div>
          </div>
          <div className="section">
            <BigChair imgurl={"/armchairGreen.gltf"} />
            <div className="text">
              <span>high-quality</span>
              <span>give you comfort</span>
            </div>
          </div>
          <div className="section">
            <BigChair imgurl={"/armchairGray.gltf"} />
            <div className="text">
              <span>don't hesitate</span>
              <span>it's in stock</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
