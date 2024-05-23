import { Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  ChevronDownIcon,
  ChevronUpIcon,
  Icon,
  ScrollView,
  View,
} from "@gluestack-ui/themed";

import { Entypo } from "@expo/vector-icons";

const InfoScreen = () => {
  return (
    <Layout>
      <ScrollView className="h-full">
        <View className="flex flex-col gap-8 h-full pt-16">
          <View className="flex flex-col justify-center items-center">
            <Text
              className="text-primaryGreen text-4xl"
              style={{
                fontFamily: "Gilroy-ExtraBold",
              }}
            >
              FAQ
            </Text>
            <Text
              className="text-white text-xl"
              style={{
                fontFamily: "Gilroy-ExtraBold",
              }}
            >
              GET HELP
            </Text>
          </View>

          <Accordion className="m-5 mb-32 w-[90%] gap-4 bg-secondaryGray90">
            {[
              {
                title: "How does the Wash World app work?",
                content:
                  "The Wash World app allows you to find the nearest car wash, pay for your wash, and track your wash progress, all without having to leave your car. You can also view your wash history and save your favorite wash locations for easy access.",
              },
              {
                title: "What payment methods do you accept?",
                content:
                  "We accept all major credit cards, including Visa, Mastercard, and American Express.",
              },
              {
                title:
                  "What does Wash World do to stay environmentally friendly?",
                content:
                  "Wash World is committed to reducing water waste and pollution. Our car washes use a specialized water recycling system that filters and reuses water for future washes. We also use biodegradable soaps and detergents that are safe for the environment.",
              },
              {
                title:
                  "What is the difference between a single wash and a membership?",
                content:
                  "A single wash is a one-time payment for a single wash. A membership is a subscription service that allows you to pay a fixed monthly fee for unlimited washes. Memberships are grouped by the highest wash level that is included in the membership. For example, a Gold membership includes all wash levels up to Gold. If desired, membership users are able to select a lower-tier wash for a fast washing experience, or even select a higher tier wash and pay the difference. Memberships are billed monthly and can be canceled at any time.",
              },
              {
                title: "How do I cancel my membership?",
                content:
                  "Memberships can be canceled at any time by visiting the 'Settings' section of the app and selecting 'Cancel Membership'.",
              },
              {
                title: "How do I report damage to my vehicle?",
                content:
                  "In the event that your vehicle is damaged during a wash, please navigate to the 'Settings' section of the app and select 'Report Damage'. You will be prompted to provide details about the damage and upload photos. Our customer service team will review your claim and contact you with further instructions.",
              },
            ].map(({ title, content }, index) => (
              <AccordionItem
                key={index}
                value={title}
                className="border-t-2 border-primaryGreen p-4"
              >
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <View className="flex flex-row items-center justify-between">
                          <Text className="text-white text-2xl w-5/6">
                            {title}
                          </Text>
                          {isExpanded ? (
                            <Entypo name="chevron-up" size={24} color="white" />
                          ) : (
                            <Entypo
                              name="chevron-down"
                              size={24}
                              color="white"
                            />
                          )}
                        </View>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText className="text-white pt-2">
                    {content}
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default InfoScreen;
