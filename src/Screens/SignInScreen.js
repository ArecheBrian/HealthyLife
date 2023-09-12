import { Box } from '@gluestack-ui/themed';
import { Form } from '../components/SignInForm';

export function SignInScreen() {
  return (
      <Box flex={1} width="100%" justifyContent="center" alignItems="center">
        <Form/>
      </Box>
  );
}