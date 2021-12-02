import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';


export default function Home() {
  return (
    <div>
     <h1>Hello World</h1>
    </div>
  )
}
