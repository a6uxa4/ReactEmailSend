import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const SmartexConfirmationEmail = () => {
  const previewText = "Подтверждение вашей учетной записи в SMARTEX";


  return (
    <Html>
      <Head>
        <style>
          {`
            @media (max-width: 640px) {
              .sm-logo {
                width: 140px !important;
                left: 24px !important;
              }
              .sm-sticker {
                right: 0 !important
              }
              .sm-background {
               display: none !important;
              }
              .sm-mobile-background {
               display: block !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto max-w-xl">
            {/* Header */}
            <Section className="sm-container rounded-t-lg relative h-[250px]">
              <Img
                src={`/static/smartex-background-mobile.svg`}
                alt="SMARTEX_BACKGROUND"
                className="w-full h-full absolute top-0 sm-mobile-background hidden"
              />
              <Img
                src={`/static/smartex-background.svg`}
                alt="SMARTEX_BACKGROUND"
                className="w-full h-full absolute top-0 sm-background block"
              />
              <Img
                src={`/static/smartex-icon.png`}
                alt="SMARTEX_ICON"
                width="190"
                className="absolute top-[70px] left-[50px] sm-logo"
              />
              <Img
                src={`/static/smartex-sticker.png`}
                alt="SMARTEX_STICKER"
                width="175"
                className="absolute top-0 right-[40px] sm-sticker"
              />
            </Section>

            {/* Main content */}
            <Section className="bg-white px-10 text-center">
              <Heading className="text-lg font-medium">
                Подтверждение вашей учетной записи в
              </Heading>
              <Heading className="text-lg font-semibold text-[#FF9500] mt-[-15px]">
                SMARTEX 🔥
              </Heading>

              <Text className="text-gray-600 mt-[10px] font-normal px-10">
                Пожалуйста, подтвердите свой адрес электронной почты, чтобы
                начать использовать
              </Text>

              <Button
                className="bg-[#071E68] text-white py-3 px-12 rounded-full font-bold text-sm"
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
                Команда{" "}
                <span className="text-[#FF9500] font-normal">SMARTEX</span>
              </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-[#071E68] px-8 py-2 text-center rounded-b-lg">
              <Text className="text-white font-semibold mb-4">
                Следуйте за нами
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center">
                <Link href="https://facebook.com/smartex">
                  <Img
                    src={`/static/facebook-icon.svg`}
                    alt="Facebook"
                    width="24"
                    className="mx-2"
                  />
                </Link>
                <Link href="https://instagram.com/smartex">
                  <Img
                    src={`/static/instagram-icon.svg`}
                    alt="Instagram"
                    width="24"
                    className="mx-2"
                  />
                </Link>
                <Link href="https://t.me/smartex">
                  <Img
                    src={`/static/telegram-icon.svg`}
                    alt="Telegram"
                    width="24"
                    className="mx-2"
                  />
                </Link>
              </div>
              <div className="mt-[30px]">
                <Link
                  href="https://smartex.com/unsubscribe"
                  className="text-white text-xs underline"
                >
                  Отписаться
                </Link>
              </div>
              <Text className="text-gray-400 text-xs mt-[30px]">
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
