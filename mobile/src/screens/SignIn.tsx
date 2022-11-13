import { Center, Text, Icon} from 'native-base'
import Logo from '../assets/logo.svg'
import {Fontisto} from '@expo/vector-icons'
import { Button } from '../components/Button'

export function SignIn (){

    return(
        <Center flex={1} bgColor="gray.900" p={6}>
            <Logo width={212} height={40}/>

            <Button mt={12} mb={4}
                type={"SECONDARY"}
                title="ENTRAR COM O GOOGLE"
                leftIcon={<Icon as={Fontisto} color={'white'} name={"google"} size={"md"} />}
            />

            <Text color="white">
                Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
            </Text>
        </Center>
    )
}