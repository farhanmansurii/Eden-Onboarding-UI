import React from "react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function Welcome() {
  return (
    <div align="center">
      <Text textAlign="center" mt="4" fontSize="21" fontWeight="semibold">
        Welcome! First things first..
      </Text>
      <Text textAlign="center" my="1" fontSize="xs" color="gray.500">
        You can always change them later.
      </Text>
      <FormControl>
        <FormLabel mt="6" fontSize="xs" color="gray.600">
          Full Name
          <Input
            size="sm"
            borderRadius="md"
            placeholder="Steve Jobs"
            _placeholder={{ opacity: 1, color: "gray.300", fontSize: "12" }}
          />
        </FormLabel>
        <FormLabel my="4" fontSize="xs" color="gray.600">
          Display Name
          <Input
            size="sm"
            borderRadius="md"
            type="name"
            placeholder="Steve"
            _placeholder={{ opacity: 1, color: "gray.300", fontSize: "12" }}
          />
        </FormLabel>
      </FormControl>
    </div>
  );
}

export default Welcome;
