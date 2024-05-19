import Svg, { Path } from "react-native-svg";

const MapIcon = ({ fillColor }: { fillColor: string }) => (
  <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
    <Path
      d="M14.1506 28.3011C21.9657 28.3011 28.3011 21.9657 28.3011 14.1506C28.3011 6.33542 21.9657 0 14.1506 0C6.33542 0 0 6.33542 0 14.1506C0 21.9657 6.33542 28.3011 14.1506 28.3011Z"
      fill={fillColor}
    />
    <Path
      d="M22.5884 8.59937L19.0357 19.7016H15.9284L14.1507 13.773L12.3743 19.7016H9.26567L5.71289 8.59937H9.26567L10.8643 14.5502L12.5951 8.59937H15.7062L17.4382 14.5502L19.0368 8.59937H22.5884Z"
      fill="white"
    />
  </Svg>
);

export default MapIcon;
