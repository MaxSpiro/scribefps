import Link from 'next/link'
import Image from 'next/image'
import {Box, Flex, Heading} from '@chakra-ui/react'

interface CoverProps{
  released?: boolean
  title: string
  imgSrc: string
  issueNum: number,
  volNum: string
}

export const Cover = ({
    released = false,
  title,
  imgSrc,
  issueNum,
  volNum,
}: CoverProps) => {
  return (
    <Flex direction='column' align='center' mx={12} mb={12}>
      {(released && imgSrc) ?
        <Box boxShadow='lg'>
          <Link href={`/archive/${volNum}/${issueNum}`}>
            <a>
              <Image width={400} height={550} src={imgSrc} />
            </a>

          </Link>
        </Box> :
        <Box w='72' h='96' bg='pink.400' border='4px' borderStyle='dashed' rounded='2xl' />
      }
      <Heading mt='6' size='lg' color='white'>{released ? `Issue ${issueNum} - ${title}` : 'Coming soon!'}</Heading>
    </Flex >
  )
}
