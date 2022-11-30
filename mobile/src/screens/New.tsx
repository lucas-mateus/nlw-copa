import { Heading, Text, VStack } from "native-base";
import Logo from '../assets/logo.svg'
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function New() {
  return (
    <VStack flex={1} bgColor="gray.900" >
        <Header title={"Criar novo bolão"} />
        
        <VStack mt={8} mx={8} alignItems={"center"}>
            <Logo />

            <Heading my={8} textAlign={'center'} color={'white'} fontSize={'xl'} fontFamily={'heading'}>
                Crie seu próprio bolão da copa {'\n'} 
                e compartilhe entre amigos!
            </Heading>

            <Input mt={8} placeholder={"Qual o nome do seu bolão?"}/>
            <Button mt={2} title={'Criar o meu bolão'} />

            <Text textAlign={'center'} color={'gray.200'} fontSize={'sm'} px={6} mt={4}>
                Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
            </Text>

        </VStack>
    </VStack>
  )
}