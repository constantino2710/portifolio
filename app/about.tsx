import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons'; // Ícones do expo
import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';

const About = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#0D1117] px-8 py-20">
      <View className="flex items-center justify-center bg-[#161B22] w-full rounded-2xl p-6 space-y-4">
        <Image
          source={require('../assets/eu-perfil.png')}
          className="w-[10rem] h-[10rem] rounded-xl border-2 border-[#00875f] object-cover"
        />
        <Text className="text-white text-2xl font-semibold">Sobre Mim</Text>
        <Text className="text-white text-center text-base leading-relaxed">
          Olá! Eu sou um <Text className="text-[#00875f] font-semibold">Desenvolvedor Front-end</Text>, apaixonado por criar{' '}
          <Text className="text-[#00875f] font-semibold">interfaces modernas</Text> e{' '}
          <Text className="text-[#00875f] font-semibold">experiências de usuário</Text> incríveis.
          No momento, estou expandindo meus conhecimentos para o <Text className="text-[#00875f] font-semibold">Back-end</Text>,
          estudando <Text className="text-[#00875f] font-semibold">NestJS</Text> e aprendendo a desenvolver{' '}
          <Text className="text-[#00875f] font-semibold">APIs robustas</Text> e bem estruturadas.
          Meu objetivo é me tornar um <Text className="text-[#00875f] font-semibold">Desenvolvedor Full Stack</Text>,
          unindo <Text className="text-[#00875f] font-semibold">boas práticas</Text> de{' '}
          <Text className="text-[#00875f] font-semibold">desenvolvimento front-end</Text> e <Text className="text-[#00875f] font-semibold">back-end</Text>
          para entregar <Text className="text-[#00875f] font-semibold">soluções completas</Text> e de qualidade.
        </Text>

        {/* Botões de redes sociais */}
        <View className="flex-row justify-between w-full mt-4">
          <TouchableOpacity
            onPress={() => openLink('https://www.twitch.tv/seuusuario')}
            className="w-14 h-14 rounded-full bg-[#00875f] items-center justify-center"
          >
            <FontAwesome name="twitch" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openLink('https://www.instagram.com/seuusuario')}
            className="w-14 h-14 rounded-full bg-[#00875f] items-center justify-center"
          >
            <Feather name="instagram" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openLink('https://www.youtube.com/seuusuario')}
            className="w-14 h-14 rounded-full bg-[#00875f] items-center justify-center"
          >
            <AntDesign name="youtube" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openLink('https://www.linkedin.com/in/seuusuario')}
            className="w-14 h-14 rounded-full bg-[#00875f] items-center justify-center"
          >
            <Feather name="linkedin" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default About;