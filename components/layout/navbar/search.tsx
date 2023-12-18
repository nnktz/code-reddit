'use client'

import qs from 'query-string'
import { SearchIcon } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useSearchInput } from '@/hooks/use-search-input'

import { Hint } from '@/components/hint'
import { Button } from '@/components/ui/button'
import { SearchInput } from './search-input'

export const Search = () => {
  const router = useRouter()
  const { onOpen, onClose, isOpen } = useSearchInput((state) => state)

  const [searchValue, setSearchValue] = useState('')

  const onchange = (value: string) => {
    setSearchValue(value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!searchValue) {
      return
    }

    const url = qs.stringifyUrl(
      {
        url: '/search',
        query: {
          term: searchValue,
        },
      },
      { skipEmptyString: true },
    )

    router.push(url)
  }

  return (
    <>
      <Hint label="search" side="bottom" align="center" asChild>
        <Button onClick={onOpen} variant={'ghost'} size={'icon'} className="h-10 w-10">
          <SearchIcon />
        </Button>
      </Hint>

      <SearchInput
        onClose={onClose}
        isOpen={isOpen}
        searchValue={searchValue}
        setSearchValue={onchange}
        onSubmit={onSubmit}
      />
    </>
  )
}
