import { Text, Box, HStack, VStack, Input, InputField, FlatList } from '@gluestack-ui/themed';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlimentosDta } from '../../redux/features/alimentosSlice';

export function HomeScreen() {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.alimentos);

    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchAlimentosDta());
        }
      }, [dispatch, status]);

  return (
    <SafeAreaView style={{flex: '1'}}>
     <VStack flex={1} px={'$3'} space={'sm'}>
        <VStack bg={'$amber800'}>            
            <Input bg={'$borderDark300'}>
                <InputField
                    placeholder="Search..."
                />
            </Input>
      
        </VStack>
        <VStack flex={1}>
            {
                status === 'loading'? (
                    <Text>cargando...</Text>
                ) : status === 'failed'? (
                    <Text>Error: {error}</Text>
                ) : (
                    <FlatList 
                        data={data}
                        renderItem={({item})=>{
                            return (<Box><Text>{item.nombre}</Text></Box>)
                        }}
                    />
                )
            }
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}