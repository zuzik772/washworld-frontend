import { Image } from "@gluestack-ui/themed";

type AvatarProps = {
  image: string;
  className?: string;
};

const Avatar = ({ image, className }: AvatarProps) => {
  return (
    <Image
      source={{ uri: image }}
      className={`w-32 h-32 rounded-3xl border-primaryGreen border-4 ${className}`}
      alt="Avatar"
    />
  );
};

export default Avatar;
