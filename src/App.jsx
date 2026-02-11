import { StatusBar } from 'expo-status-bar';
import HomeTab from './tabs/HomeTab';

export default function App() {
  return (
    <>
      <HomeTab />
      <StatusBar style="auto" />
    </>
  );
}
