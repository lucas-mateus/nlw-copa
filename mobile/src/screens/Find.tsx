import { Heading, VStack } from "native-base";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900" >
        <Header title={"Buscar por código"} showBackButton />
        
        <VStack mt={8} mx={5} alignItems={"center"}>

            <Heading textAlign={'center'} color={'white'} fontSize={'xl'} fontFamily={'heading'}>
                Encontre um bolão através de seu código único   
            </Heading>

            <Input mt={8} placeholder={"Qual o código do bolão?"}/>
            <Button mt={2} title={'Buscar bolão'} />

        </VStack>
    </VStack>
  )
}