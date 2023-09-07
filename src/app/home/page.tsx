import Image from 'next/image'
import { Apresentation, Experiences, Organizations } from './@root/sections'

export default function Home() {

  return (
    <>
      <Apresentation />
      <Experiences />
      <Organizations />
    </>
  )
}
