import {
  Body,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const SmartexViewEmail = () => {
  const previewText = "Спасибо за использование Smartex.";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Section>
            <div className="relative bg-[#0B1675] p-10 rounded-t-lg overflow-hidden">
              <Img
                src="/static/smartex-icon.png"
                width="150"
                height="40"
                alt="Smartex"
                className="inline-block mb-5"
              />

              <div className="absolute right-10 top-10 z-2">
                <Img
                  src="/static/smartex-sticker.png"
                  width="120"
                  height="120"
                  alt="Smartex Character"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-15 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="absolute w-full h-15 bottom-0"
                >
                  <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    fill="#F5933B"
                    opacity="1"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="bg-[#F5933B] h-10"></div>

            <div className="bg-white p-6 rounded-b-lg border border-[#e5e7eb] border-t-0">
              <p className="text-lg text-[#333333]">
                Your email content here...
              </p>
            </div>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SmartexViewEmail;
