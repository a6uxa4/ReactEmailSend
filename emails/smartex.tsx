import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Text,
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
          <Container className="mx-auto py-5 max-w-600">
            <Text>Спасибо за использование Smartex.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SmartexViewEmail;
