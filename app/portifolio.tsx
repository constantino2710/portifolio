import React from 'react';
import { Text, View } from 'react-native';
import CardLink from '../components/card';

const Portifolio = () => {
  return (
    <View className='flex-1 bg-[#0D1117] px-8 pt-12'>
      <Text className='text-2xl text-white font-bold mb-6 self-center'>Portfólio</Text>

      <CardLink
        title="Projeto 1 - Meu primeiro site"
        href="/projeto1"
        image={require('../assets/image.png')}
      />
      <CardLink
        title="Projeto 2 - Dashboard Admin"
        href="/projeto2"
        image={require('../assets/nordestemedical.webp')}
      />
      <CardLink
        title="Projeto 3 - Loja Online"
        href="/projeto3"
        image={{ uri: 'https://placekitten.com/200/200' }}
      />
    </View>
  );
};

export default Portifolio;
