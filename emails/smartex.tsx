import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const SmartexConfirmationEmail = () => {
  const previewText = "Подтверждение вашей учетной записи в SMARTEX";

  // Base URL for the images - would be replaced with actual hosted image URLs
  const baseUrl = "https://yourdomain.com";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-xl">
            {/* Header */}
            <Section className="rounded-t-lg bg-blue-900 p-8">
              <Row>
                <Column>
                  <Img
                    src={`/static/smartex-icon.png`}
                    alt="SMARTEX"
                    width="150"
                    className="mb-4"
                  />
                </Column>
                <Column align="right">
                  <Img
                    src={`/static/smartex-sticker.png`}
                    alt="Mascot"
                    width="80"
                  />
                </Column>
              </Row>
            </Section>

            {/* Orange wave divider */}
            <Section className="bg-orange-400 h-12 rounded-b-3xl" />

            {/* Main content */}
            <Section className="bg-white px-8 py-10 text-center">
              <Heading className="text-2xl font-bold text-gray-800 mb-2">
                Подтверждение вашей учетной записи в SMARTEX 🔥
              </Heading>

              <Text className="text-gray-600 mb-6">
                Пожалуйста, подтвердите свой адрес электронной почты, чтобы
                начать использовать
              </Text>

              <Button
                className="bg-blue-900 text-white py-3 px-12 rounded-full font-bold"
                href="https://smartex.com/confirm-email"
              >
                Подтвердить почту
              </Button>

              <Text className="text-gray-600 mt-8 text-sm">
                Если вы не регистрировали эту учетную запись, вы можете
                игнорировать это письмо, и учетная запись будет удалена.
              </Text>

              <Text className="mt-8">
                С наилучшими пожеланиями,
                <br />
                <span className="text-orange-500 font-bold">
                  Команда SMARTEX
                </span>
              </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-blue-900 px-8 py-8 text-center rounded-b-lg">
              <Text className="text-white mb-4">Следуйте за нами</Text>

              <Row className="mb-4">
                <Column align="center">
                  <Link href="https://facebook.com/smartex">
                    <Img
                      src={`${baseUrl}/facebook-icon.png`}
                      alt="Facebook"
                      width="24"
                      className="mx-2"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link href="https://instagram.com/smartex">
                    <Img
                      src={`${baseUrl}/instagram-icon.png`}
                      alt="Instagram"
                      width="24"
                      className="mx-2"
                    />
                  </Link>
                </Column>
                <Column align="center">
                  <Link href="https://t.me/smartex">
                    <Img
                      src={`${baseUrl}/telegram-icon.png`}
                      alt="Telegram"
                      width="24"
                      className="mx-2"
                    />
                  </Link>
                </Column>
              </Row>

              <Link
                href="https://smartex.com/unsubscribe"
                className="text-white text-xs underline"
              >
                Отписаться
              </Link>

              <Text className="text-gray-400 text-xs mt-4">
                Copyright © 2025 Smartex
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SmartexConfirmationEmail;
