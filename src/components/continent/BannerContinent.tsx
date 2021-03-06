import { Text, Flex, Heading, Image, Stack } from "@chakra-ui/react";

interface BannerContinentProps {
  title: string
}

export default function BannerContinent({ title }: BannerContinentProps) {
  return(
    <Flex
      w="100%"  
      h={['250px',"500px"]}
      bgImage="url('../images/cities/London.jpg')"
      bgPosition='0% 50%'
      bgRepeat="no-repeat"
      bgSize="cover"
      justify='center'
    >
     <Flex
        w="1240px"
        align='center'
        justify='space-between'
        position='relative'
        px='10'
      >
        <Heading
          color='white.50'
          position='absolute'
          bottom={['8','16']}
          fontWeight='bold'>
          {title}
        </Heading>
      </Flex>
    </Flex>
  )
}