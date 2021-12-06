import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Web3 from 'web3'

export default function Home() {

  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)

  useEffect(() => {
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
        let w3 = new Web3(ethereum)
        setWeb3(w3)
      }).catch((err) => console.log(err))
    : console.log("Please install MetaMask")
  }, [])

  return (
    <Layout home>
      <div className="text-center m-5 mx-auto w-1/2">
        <div className="p-3 border-2 border-gray-700 hover:shadow-inner text-center rounded-lg cursor-pointer">
          <span className="flex items-center justify-center">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/32px-MetaMask_Fox.svg.png"
              width="30px"
              height="30px"
              />
            <button className="m-1 font-bold text-black"> Connect Wallet </button>
          </span>
        </div>
      </div>
    </Layout>
  )
}
