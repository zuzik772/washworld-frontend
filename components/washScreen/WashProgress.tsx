import { View, Text, set } from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type WashProgressProps = {
  washType: "Basic" | "Gold" | "Premium" | "Premium Plus" | "All Inclusive";
  onStateChange: (state: string) => void;
  onComplete: () => void;
  forceStop: boolean;
};
const WashProgress = ({
  washType,
  onStateChange,
  onComplete,
  forceStop,
}: WashProgressProps) => {
  const apiWashInfo = new Map([
    [
      "Basic",
      [
        {
          state: "State 1",
          description: "Description 1",
          time: 10,
        },
        {
          state: "State 2",
          description: "Description 2",
          time: 20,
        },
      ],
    ],
    [
      "Gold",
      [
        {
          state: "State 1",
          description: "Description 1",
          time: 10,
        },
        {
          state: "State 2",
          description: "Description 2",
          time: 20,
        },
        {
          state: "State 3",
          description: "Description 3",
          time: 10,
        },
      ],
    ],
    [
      "Premium",
      [
        {
          state: "State 1",
          description: "Description 1",
          time: 10,
        },
        {
          state: "State 2",
          description: "Description 2",
          time: 20,
        },
        {
          state: "State 3",
          description: "Description 3",
          time: 10,
        },
        {
          state: "State 4",
          description: "Description 4",
          time: 10,
        },
        {
          state: "State 5",
          description: "Description 5",
          time: 20,
        },
      ],
    ],
    [
      "Premium Plus",
      [
        {
          state: "State 1",
          description: "Description 1",
          time: 10,
        },
        {
          state: "State 2",
          description: "Description 2",
          time: 20,
        },
        {
          state: "State 3",
          description: "Description 3",
          time: 10,
        },
        {
          state: "State 4",
          description: "Description 4",
          time: 10,
        },
        {
          state: "State 5",
          description: "Description 5",
          time: 20,
        },
        {
          state: "State 6",
          description: "Description 6",
          time: 10,
        },
      ],
    ],
    [
      "All Inclusive",
      [
        {
          state: "State 1",
          description: "Description 1",
          time: 10,
        },
        {
          state: "State 2",
          description: "Description 2",
          time: 20,
        },
        {
          state: "State 3",
          description: "Description 3",
          time: 10,
        },
        {
          state: "State 4",
          description: "Description 4",
          time: 10,
        },
        {
          state: "State 5",
          description: "Description 5",
          time: 20,
        },
        {
          state: "State 6",
          description: "Description 6",
          time: 10,
        },
        {
          state: "State 7",
          description: "Description 7",
          time: 30,
        },
      ],
    ],
  ]);

  const washInfo = apiWashInfo.get(washType)!;
  const totalWashTime = washInfo.reduce((acc, curr) => acc + curr.time, 0);

  const [updatedSecondsLeft, setUpdatedSecondsLeft] = useState(totalWashTime);
  const [progress, setProgress] = useState(100);
  const [secondsLeft, setSecondsLeft] = useState(updatedSecondsLeft % 60);
  const [minutesLeft, setMinutesLeft] = useState(
    Math.floor(updatedSecondsLeft / 60)
  );

  const [stateProgress, setStateProgress] = useState(
    washInfo.map((state) => {
      return {
        state: state.state,
        progress: 0,
      };
    })
  );

  useEffect(() => {
    setTimeout(() => {
      if (forceStop) return;
      if (updatedSecondsLeft <= 0) return onComplete();
      else {
        setUpdatedSecondsLeft((prevSeconds) => prevSeconds - 1);
        setProgress(((updatedSecondsLeft - 1) / totalWashTime) * 100);
        setSecondsLeft((updatedSecondsLeft - 1) % 60);
        setMinutesLeft(Math.floor((updatedSecondsLeft - 1) / 60));

        setStateProgress((prev) => {
          let stateIndex = 0;
          let timeSum = 0;
          for (let i = 0; i < washInfo.length; i++) {
            timeSum += washInfo[i].time;
            if (timeSum > totalWashTime - updatedSecondsLeft) {
              stateIndex = i;
              break;
            }
          }

          return prev.map((state, index) => {
            if (index < stateIndex) {
              return {
                state: state.state,
                progress: 100,
              };
            } else if (index === stateIndex) {
              return {
                state: state.state,
                progress:
                  ((totalWashTime -
                    updatedSecondsLeft +
                    1 -
                    (timeSum - washInfo[stateIndex].time)) /
                    washInfo[stateIndex].time) *
                  100,
              };
            } else {
              return {
                state: state.state,
                progress: 0,
              };
            }
          });
        });
      }
    }, 1000);
  }, [updatedSecondsLeft]);

  useEffect(() => {
    onStateChange(washInfo[0].state);
  }, []);

  const [currentStateIndex, setCurrentStateIndex] = useState(0);

  useEffect(() => {
    const currentStateIndex = stateProgress.findIndex(
      (state) => state.progress !== 100
    );
    if (currentStateIndex >= 0) {
      onStateChange(washInfo[currentStateIndex].state);
      setCurrentStateIndex(currentStateIndex);
    }
  }, [stateProgress]);

  const width = Dimensions.get("window").width;
  const barWidth = width / Math.min(washInfo.length, 3) - 50;

  return (
    <View className="relative flex items-center justify-center">
      <AnimatedCircularProgress
        size={300}
        width={30}
        fill={progress}
        tintColor="#34B566"
        onAnimationComplete={() => {
          if (minutesLeft === 0 && secondsLeft === 0) {
            console.log("Done!");
          }
        }}
        backgroundColor="#20402C"
        rotation={0}
      >
        {() => (
          <Text
            className="text-white text-center text-5xl"
            style={{
              fontFamily: "Gilroy-ExtraBold",
            }}
          >
            {`${minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:${
              secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
            }`}
          </Text>
        )}
      </AnimatedCircularProgress>

      <View
        className="flex flex-row w-full mt-8"
        style={{
          justifyContent: washInfo.length > 3 ? "flex-start" : "center",
          left:
            washInfo.length > 3 && currentStateIndex > 1
              ? (-currentStateIndex + 1) * (barWidth + 16)
              : 0,
        }}
      >
        {washInfo.map((state, index) => (
          <View className="flex flex-col gap-2" key={index}>
            <View
              className="flex flex-row relative mx-4 items-center"
              style={{
                width: barWidth,
              }}
            >
              <View
                className="h-4 w-4 rounded-full right-2 relative flex justify-center items-center"
                style={{
                  backgroundColor:
                    stateProgress[index].progress === 0 ? "white" : "#34B566",
                  opacity: stateProgress[index].progress !== 100 ? 0.5 : 1,
                }}
              >
                <Text className="text-white absolute text-xs">
                  {stateProgress[index].progress === 0
                    ? ""
                    : stateProgress[index].progress === 100
                    ? "✓"
                    : "⋯"}
                </Text>
              </View>
              <View className="relative h-2 w-full">
                <View
                  className="absolute top-0 left-0 h-full w-full opacity-50"
                  style={{
                    backgroundColor:
                      stateProgress[index].progress === 0 ? "white" : "#34B566",
                  }}
                />
                <View
                  className="absolute top-0 left-0 h-full bg-primaryGreen"
                  style={{ width: `${stateProgress[index].progress}%` }}
                />
              </View>
            </View>

            <View className="flex flex-col ml-2">
              <Text
                className="text-white text-3xl"
                style={{
                  fontFamily: "Gilroy-ExtraBold",
                }}
              >
                {state.state}
              </Text>
              <Text
                className="text-white"
                style={{
                  fontFamily: "Gilroy-Medium",
                }}
              >
                {state.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WashProgress;
