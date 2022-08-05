import React from 'react'
import {MdOutlineDone} from 'react-icons/md'
import { Icon , Button} from '@chakra-ui/react';

import {Text} from "@chakra-ui/react";
function Congratulations() {
  return (
    <>
    <Icon as={MdOutlineDone} mx='40' h='12' w='12' p='4' backgroundColor='#7660E8' color='white' borderRadius='3xl' mt='6'/>
    <Text textAlign="center" mt="4" fontSize="21" fontWeight="semibold">
       Congratulations , Eren!
      </Text>
      <Text textAlign="center" my="2" fontSize="xs" color="gray.500">
      You have completed onboarding, you can start using the Eden!
      </Text>
      <Button bg='#7660E8' textColor='white' fontWeight='normal' fontSize='xs' width='100%' mt='4 '  _hover={{ bg:"#9F8FEE"}}>
        Launch Eden
      </Button>
    </>
  )
}

export default Congratulations