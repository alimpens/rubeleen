import { useEffect, useState } from "react";
import scrollama from "scrollama";
import Background from "./Background";
import * as d3 from "d3";

import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // using d3 for convenience
    var main = d3.select("main");
    var scrolly = main.select("#scrolly");
    var background = scrolly.select("#background");
    var article = scrolly.select("article");
    var step = article.selectAll(".step");

    // initialize the scrollama
    var scroller = scrollama();

    // generic window resize listener event
    function handleResize() {
      // 1. update height of step elements
      var stepH = Math.floor(window.innerHeight * 0.75);
      step.style("height", stepH + "px");

      background.style("height", "75vh").style("top", "10%");

      // 3. tell scrollama to update new element dimensions
      scroller.resize();
    }

    // scrollama event handlers
    function handleStepEnter(response) {
      setStep(response.index + 1);

      console.log(response);
    }

    function init() {
      // 1. force a resize on load to ensure proper dimensions are sent to scrollama
      handleResize();

      // 2. setup the scroller passing options
      // 		this will also initialize trigger observations
      // 3. bind scrollama event handlers (this can be chained like below)
      scroller
        .setup({
          step: "#scrolly article .step",
          offset: 0.8,
          debug: false,
        })
        .onStepEnter(handleStepEnter);
    }

    // kick things off
    init();
  }, []);

  return (
    <main>
      <section id="scrolly">
        <Background step={step} />

        <article>
          <div className="step" data-step="1">
            <p>lieve anneleen en ruben</p>
          </div>
          <div className="step" data-step="2">
            <p>ik ken jullie nu al een hele tijd</p>
          </div>
          <div className="step" data-step="3">
            <p>en wat me is opgevallen</p>
          </div>
          <div className="step" data-step="4">
            <p>is hoe veelzijdig jullie zijn</p>
          </div>
          <div className="step" data-step="5">
            <p>van flinke politieke discussies</p>
          </div>
          <div className="step" data-step="6">
            <p>tot heel holland zingt hazes</p>
          </div>
          <div className="step" data-step="7">
            <p>een oud-hollands potje sjoelen</p>
          </div>
          <div className="step" data-step="8">
            <p>en een ‘rustige’ oud & nieuw</p>
          </div>
          <div className="step" data-step="9">
            <p>die maar doorging</p>
          </div>
          <div className="step" data-step="10">
            <p>en doorging</p>
          </div>
          <div className="step" data-step="11">
            <p>en doorging</p>
          </div>
          <div className="step" data-step="12">
            <p>maar wat me vooral opvalt</p>
          </div>
          <div className="step" data-step="13">
            <p>is hoe leuk jullie het met z’n tweeën hebben</p>
          </div>
          <div className="step" data-step="14">
            <p>geniet van deze dagen</p>
          </div>
          <div className="step" data-step="15">
            <p>en van elkaar</p>
          </div>
          <div className="step" data-step="16">
            <p>en nu: fissa</p>
          </div>
        </article>
      </section>

      <section id="outro"></section>
    </main>
  );
}

export default App;
