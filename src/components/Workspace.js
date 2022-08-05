import React from "react";

import { Text , Flex} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
function Workspace() {
  return (
    <>
      <div></div>
      <div align="center">
        <Text textAlign="center" mt="4" fontSize="21" fontWeight="semibold">
          Let's set up a home for all your work
        </Text>
        <Text textAlign="center" my="1" fontSize="xs" color="gray.500">
          You can always create another workspace later
        </Text>
        <FormControl>
          <FormLabel mt="6" fontSize="xs" color="gray.600">
            Workspace Name
            <Input
              size="sm"
              borderRadius="md"
              placeholder="Eden"
              _placeholder={{ opacity: 1, color: "gray.300", fontSize: "12" }}
            />
          </FormLabel>
          <FormLabel my="4" fontSize="xs" color="gray.600">
            <Flex>
                <Text>Display Name</Text>
                <Text fontSize='xs' color='gray.400' mx='2' fontWeight='normal'> (optional)</Text>
            </Flex>
            <InputGroup size="sm"
                borderRadius="md">
              <InputLeftAddon children="www.eden.com/"  color="gray.400"  fontSize= "12" />
              <Input
                size="sm"
                borderRadius="md"
                type="name"
                placeholder="Example"
                _placeholder={{ opacity: 1, color: "gray.300", fontSize: "12" }}
              />
            </InputGroup>
          </FormLabel>
        </FormControl>
      </div>
    </>
  );
}

export default Workspace;
