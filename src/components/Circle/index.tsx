import React, { useState } from "react";
import "./style.css";

const RingComponent = () => {
  function circle(id: any) {
    var el = document.getElementById(id);

    var elDisplay = el?.children[0] as HTMLDivElement; // Explicitly specify the type as HTMLDivElement
    var elInteraction = el?.children[1];

    var offsetRad = null;
    var targetRad = 0;
    var previousRad: number;

    try {
      elInteraction?.addEventListener("mousedown", down);
    } catch (err) {
      console.log("Interaction not found");
    }

    function down(event: any) {
      offsetRad = getRotation(event);
      previousRad = offsetRad;
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    }

    function move(event: any) {
      var newRad = getRotation(event);
      targetRad += newRad - previousRad;
      previousRad = newRad;
      if (elDisplay) {
        var transformValue = `rotate(${(targetRad / Math.PI) * 180}deg)`;
        elDisplay.style.transform = transformValue;
      }
    }

    function up() {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    }

    function getRotation(event: any) {
      var pos = mousePos(event, elInteraction);
      var x = pos.x - (elInteraction?.clientWidth || 0) * 0.5;
      var y = pos.y - (elInteraction?.clientHeight || 0) * 0.5;
      return Math.atan2(y, x);
    }

    function mousePos(event: any, currentElement: any) {
      var totalOffsetX = 0;
      var totalOffsetY = 0;
      var canvasX = 0;
      var canvasY = 0;

      do {
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
      } while ((currentElement = currentElement.offsetParent));

      canvasX = event.pageX - totalOffsetX;
      canvasY = event.pageY - totalOffsetY;

      return {
        x: canvasX,
        y: canvasY,
      };
    }
  }

  return (
    <div className="ring-wrapper">
      <div id="layer-one" className="ring layer-1">
        <div className="ring-display">
          <div className="label">
            <span>A</span>
          </div>
          <div className="label">
            <span>B</span>
          </div>
          <div className="label">
            <span>C</span>
          </div>
          <div className="label">
            <span>D</span>
          </div>
          <div className="label">
            <span>E</span>
          </div>
          <div className="label">
            <span>F</span>
          </div>
          <div className="label">
            <span>G</span>
          </div>
          <div className="label">
            <span>H</span>
          </div>
          <div className="label">
            <span>I</span>
          </div>
          <div className="label">
            <span>J</span>
          </div>
          <div className="label">
            <span>L</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingComponent;
