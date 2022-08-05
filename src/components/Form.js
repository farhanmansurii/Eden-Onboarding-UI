import { Container ,Center ,Button,Box,Flex ,Icon} from "@chakra-ui/react";
import React, { useState } from "react";
import Welcome from "./Welcome";
import { Image } from '@chakra-ui/react'
import Workspace from "./Workspace";
import Planning from "./Planning";
import Congratulations from "./Congratulations";
import {RiNumber1 , RiNumber2 ,RiNumber3 , RiNumber4} from "react-icons/ri"

function Form() {
  const [page, setPage] = useState(0);
  const Formtitles = [<Welcome />, <Workspace/>, <Planning/>, <Congratulations/>];
  const ProgressBar = ['20%' , '50% ', '80%' , '100%'];
  
  return (
    <Center>

      <Container my='6' size="md" w="30%" alignSelf="center" >
      <div   align='center'>
        <Image src='https://64.media.tumblr.com/1450a395b8f5f31487810928a5d73c1d/5076f1017c26e564-cb/s400x600/6cd2705544aa1c7a05a44dc48de1760c69b8a944.pnj' width='25%'/>
        </div>
        
        <div className="progressbar">
            <Flex justify='space-between' position='fixed' mt='8'>
                <Icon as={RiNumber1} mr='20' border='1px solid gray' background={page >= 0 ? '#836FEA' : 'white'}  color = {page >= 0 ?  'white' : ' black' } borderRadius='3xl' p='2' fontSize='3xl' />
                <Icon as={RiNumber2} mr='20' border='0.5px solid gray' background={page >= 1 ? '#836FEA' : 'white'}  color = {page >= 1 ?  'white' : 'black' } borderRadius='3xl' p='2' fontSize='3xl' />
                <Icon as={RiNumber3} mr='20' border='1px solid gray' background={page >= 2 ? '#836FEA' : 'white'}  color = {page >= 2 ?  'white' : 'black' } borderRadius='3xl' p='2' fontSize='3xl' />
                <Icon as={RiNumber4}  border='1px solid gray' background={page >= 3 ? '#836FEA' : 'white'}  color = {page >= 3 ?  'white' : 'black' } borderRadius='3xl' p='2' fontSize='3xl' />
                
            </Flex>
                  
            </div>
          <Box borderRadius='xl' my='12' backgroundColor="#836FEA"
              width= {ProgressBar[page]} height='0.5'
          ></Box>
        <div className="container">
          <div className="header">{Formtitles[page]}</div>
          <div className="body"></div>
          <div className="footer">
            <Button
              hidden={page === Formtitles.length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
              bg='#7660E8' textColor='white' fontWeight='normal' fontSize='xs' width='100%' mt='1' _hover={{ bg:"#836FEA"}} _active={{  bg:"#836FEA"}}
            >
              Create Workspace
            </Button>
          </div>
        </div>
      </Container>
    </Center>
  );
}

export default Form;
