import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type CardLinkProps = {
  title: string;
  href: string;
  image: any; // Pode ser require ou { uri: string }
};

export default function CardLink({ title, href, image }: CardLinkProps) {
  return (
    <Link href={href as any} asChild>
      <TouchableOpacity className="bg-[#262c35] active:bg-[#434242] rounded-lg overflow-hidden w-full mb-4">
        <View className="flex-row items-center">
          <Image source={image} className="w-16 h-16 m-4 rounded-md" />
          <Text className="text-white font-semibold text-lg">{title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
