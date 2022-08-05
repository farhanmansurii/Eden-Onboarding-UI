import React from "react";
import {  Text, Flex, Container  } from "@chakra-ui/react";
import { IoPerson ,IoPeople } from 'react-icons/io5';
function Planning() {
  return (
    <>
      <Text textAlign="center" mt="4" fontSize="21" fontWeight="semibold">
        How are you planning to use Eden?
      </Text>
      <Text textAlign="center" my="1" fontSize="xs" color="gray.500">
        We'll streamline your setup experience accordingly.
      </Text>
      <Flex direction="row" my='3'>
        <Container border="1.5px solid #D3D3D3" borderRadius='lg' mr="3" py='3' _hover={{ border:' 1.5px solid	#7660E8'}}>
        <IoPerson  color="#7660E8" size='18' />
        <Text mt="2" fontSize="sm" fontWeight="semibold">
            For myself
          </Text>
          <Text fontSize="13" mt="1" color="gray.400">
            Write better. Think more clearly. Stay organized.
          </Text>
        </Container>

        <Container border="1.5px solid #D3D3D3" borderRadius='lg'  py='3'_focus={{ border:' 1.5px solid #7660E8' }}  _hover={{ border:' 1.5px solid	#7660E8'}}>
          <IoPeople color="#7660E8" size='20'/>
          <Text mt="2" fontSize="sm" fontWeight="semibold">
            With my team
          </Text>
          <Text fontSize="13" mt="1" color="gray.400">
            Wikis, docs, tasks & projects, all in one place.
          </Text>
        </Container>
      </Flex>
    </>
  );
}

export default Planning;
