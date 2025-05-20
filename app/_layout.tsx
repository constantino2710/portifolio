import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="portifolio" options={{ headerShown: false }} />
      <Stack.Screen name="passwordGame" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
      <Stack.Screen name="projetos/projeto1" options={{ headerShown: false }} />
      <Stack.Screen name="projetos/projeto2" options={{ headerShown: false }} />
      <Stack.Screen name="projetos/projeto3" options={{ headerShown: false }} />
      <Stack.Screen name="projetos/projeto4" options={{ headerShown: false }} />
      <Stack.Screen name="projetos/projeto5" options={{ headerShown: false }} />

  </Stack>;
}
