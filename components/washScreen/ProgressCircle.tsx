import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type ProgressCircleProps = {
  //   secondsLeft: number;
  totalTime: number;
};
const ProgressCircle = ({ totalTime }: ProgressCircleProps) => {
  const [updatedSecondsLeft, setUpdatedSecondsLeft] = useState(totalTime);
  const [progress, setProgress] = useState(100);
  const [secondsLeft, setSecondsLeft] = useState(updatedSecondsLeft % 60);
  const [minutesLeft, setMinutesLeft] = useState(
    Math.floor(updatedSecondsLeft / 60)
  );

  useEffect(() => {
    setTimeout(() => {
      if (updatedSecondsLeft > 0) {
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
            {
              // Make the seconds into the mm:ss format
              `${minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:${
                secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
              }`
            }
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>

    // <View className="flex items-center justify-center">
    //   <Text
    //     className="text-white text-center text-3xl"
    //     style={{
    //       fontFamily: "Gilroy-ExtraBold",
    //     }}
    //   >
    //     {secondsLeft}
    //   </Text>
    //   <Text
    //     className="text-white text-center text-xl"
    //     style={{
    //       fontFamily: "Gilroy-Medium",
    //     }}
    //   >
    //     {totalTime}
    //   </Text>
    // </View>
  );
};

export default ProgressCircle;
