import { Heading, VStack } from "native-base";
import Logo from '../assets/logo_primary.svg';
import { Input } from "../components/Input";

export const SignIn = () => {
    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={2}>
                Acesse sua conta
            </Heading>
            <Input />
            <Input />
        </VStack>
    )
}