import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SF_PRO_BOLD: require("../assets/fonts/SFProDisplay-Bold.ttf"),
    SF_PRO_REGULAR: require("../assets/fonts/SFProDisplay-Regular.ttf"),
    SF_PRO_ITALIC: require("../assets/fonts/SFProDisplay-RegularItalic.ttf"),
    SF_PRO_MEDIUM: require("../assets/fonts/SFProDisplay-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
