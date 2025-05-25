import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Password } from '@/components/password';

const PasswordGame = () => {
  return (
    <View className='flex-1 items-center justify-center'>
        <Password/>
    </View>
  );
};

export default PasswordGame;

const styles = StyleSheet.create({});
