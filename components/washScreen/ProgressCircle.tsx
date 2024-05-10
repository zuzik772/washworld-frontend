import { View, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type ProgressCircleProps = {
  totalTime: number;
  onComplete: () => void;
};
const ProgressCircle = ({ totalTime, onComplete }: ProgressCircleProps) => {
  const [updatedSecondsLeft, setUpdatedSecondsLeft] = useState(totalTime);
  const [progress, setProgress] = useState(100);
  const [secondsLeft, setSecondsLeft] = useState(updatedSecondsLeft % 60);
  const [minutesLeft, setMinutesLeft] = useState(
    Math.floor(updatedSecondsLeft / 60)
  );

  useEffect(() => {
    setTimeout(() => {
      if (updatedSecondsLeft <= 0) return onComplete();
      else {
        setUpdatedSecondsLeft((prevSeconds) => prevSeconds - 1);
        setProgress(((updatedSecondsLeft - 1) / totalTime) * 100);
        setSecondsLeft((updatedSecondsLeft - 1) % 60);
        setMinutesLeft(Math.floor((updatedSecondsLeft - 1) / 60));
      }
    }, 1000);
  }, [updatedSecondsLeft]);
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
    </View>
  );
};

export default ProgressCircle;
