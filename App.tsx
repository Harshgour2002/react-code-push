import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import codePush from 'react-native-code-push';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <View style={styles.content}>
        <Text style={styles.topText}>
          this is the new update from the microsoft codepush!
        </Text>
        <Text style={styles.title}>CodePush is Live!</Text>
        <Text style={styles.subtitle}>Version: 1.0.0 (Original Build)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  topText: {
    fontSize: 14,
    color: '#f43f5e',
    marginBottom: 12,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
});

const codePushOptions = {
  deploymentKey: __DEV__
    ? 'nwWQMneIFMnsJu0vYwfObb5-QaNfNJnhfEgn4g'
    : 'kMLUbFxLtmPjw-7XhIpnJxtSZHiDNJnhfEgn4g',
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
