import { Button, ButtonText, FormControl, Heading, Icon, Input, InputField, InputIcon, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

export const Form = () => {
    const navigation = useNavigation()
    return (
      <FormControl
        width={"90%"}
        p={'$4'}
        borderWidth={'$1'}
        borderRadius={'$lg'}
        borderColor={'$borderLight300'}
      >
        <VStack space={'xl'}>
          <Heading>
            Login
          </Heading>
          <VStack space={'xs'}>
            <Text>
              Email
            </Text>
            <Input>
            </Input>
          </VStack>
          <VStack space={'xs'}>
            <Text>
              Password
            </Text>
            <Input textAlign='center'>

            </Input>
          </VStack>
          <Button
            ml='auto'
            onPress={()=> navigation.navigate('Home')}
          >
            <ButtonText color='$white' onPress={()=> navigation.navigate('Home')}>
              Save
            </ButtonText>
          </Button>
        </VStack>
      </FormControl>
    );
  }
