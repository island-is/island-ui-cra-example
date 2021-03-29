import { Box, Text } from '@island.is/ui';
import { frames } from './components/PaymentFlow/PaymentFlow';

function App() {
  return (
    <>
      <Box textAlign="center">
        <Text variant="h3" paddingY={4}>
          Payment flow: Choose a card
        </Text>
      </Box>

      <frames.ChooseCard />

      <Box textAlign="center">
        <Text variant="h3" paddingY={4}>
          Payment flow: Success
        </Text>
      </Box>

      <frames.NewCard />

      <Box textAlign="center">
        <Text variant="h3" paddingY={4}>
          Payment flow: Success
        </Text>
      </Box>

      <frames.Success />
    </>
  );
}

export default App;
