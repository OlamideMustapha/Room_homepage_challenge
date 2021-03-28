import gsap from "gsap";
import { CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(CSSRulePlugin);

const start = () => gsap.timeline ({duration: .9})
  .from ('.nav-bar', {y:50, opacity:0},)
  .from ('.nav-bar__logo',{x:100, opacity:0, delay: .5});


export default start;