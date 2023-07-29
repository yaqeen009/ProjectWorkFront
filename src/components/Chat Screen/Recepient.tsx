import { useState, useEffect } from "react";
import TypingIndicator from "./typingIndicator";

export function Recepient() {
  const [isTyping, setIsTyping] = useState(false);

  // Function to handle typing start event
  const handleTypingStart = () => {
    setIsTyping(true);
  };

  // Function to handle typing stop event
  const handleTypingStop = () => {
    setIsTyping(false);
  };

  // Add event listeners to track typing events
  useEffect(() => {
    const inputElements = document.querySelectorAll("input, textarea");
    inputElements.forEach((input) => {
      input.addEventListener("input", handleTypingStart);
      input.addEventListener("blur", handleTypingStop);
    });

    return () => {
      // Remove event listeners when the component is unmounted
      inputElements.forEach((input) => {
        input.removeEventListener("input", handleTypingStart);
        input.removeEventListener("blur", handleTypingStop);
      });
    };
  }, []);

  return (
    <div className="Recepient">
      <div className="flex flex-row pl-6 pt-3">
        <div className="basis-1/10">
          <div className="rounded-full bg-black w-12 h-12 mr-3"></div>
        </div>

        <div className="basis-1/10">
          <h1>
          <div className="md:flex-col">
              Recepient Name
              {isTyping && <TypingIndicator/>}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
