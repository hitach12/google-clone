import Header from '@/components/Header'
import SearchResults from '@/components/SearchResults'
import { API_KEY, CONTEXT_KEY } from '@/keys'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

function Search({results}) {
    console.log(results)
    const router = useRouter()
  return (
    
    <div>
    <Head>
        <title>{router.query.term} google search</title>
    </Head>  


    {/* Header   */}
        <Header/>
    {/* SearchResult */}
    <SearchResults results = {results}/>
    </div>
  )
}

export default Search


export async function getServerSideProps (context) {
    const useDummyData = false;
    console.log("fetching")
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${context.query?.start || '0'}`).then(res => res.json())
    console.log(data)
    return {
        props : {
            results : data
        }
    }
}