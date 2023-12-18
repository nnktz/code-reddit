'use client'

import { SearchIcon, X } from 'lucide-react'
import { FormEvent, useCallback, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SearchInputProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  searchValue: string
  setSearchValue: (value: string) => void
}

export const SearchInput = ({
  isOpen,
  onClose,
  onSubmit,
  searchValue,
  setSearchValue,
}: SearchInputProps) => {
  const [showSearchInput, setShowSearchInput] = useState(isOpen)

  useEffect(() => {
    setShowSearchInput(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setShowSearchInput(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])

  const onClear = () => {
    setSearchValue('')
  }

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="fixed inset-0 top-0 z-50 flex h-20 items-center border-b bg-white shadow-lg dark:bg-black">
        <div className="relative mx-[30px] h-full w-full lg:mx-[208px]">
          <div
            className={cn(
              'translate flex h-full items-center justify-between duration-300',
              showSearchInput ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
            )}
          >
            <div className="flex w-full items-center justify-center">
              <form
                action=""
                onSubmit={onSubmit}
                className="relative flex w-full items-center lg:w-[500px]"
              >
                <Input
                  value={searchValue}
                  placeholder="search..."
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="h-10 rounded-r-none bg-[rgb(244,243,242)] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 dark:bg-background/5"
                />
                {searchValue && (
                  <X
                    className="absolute right-16 top-2.5 h-5 w-5 cursor-pointer select-none text-muted-foreground transition hover:opacity-75"
                    onClick={onClear}
                  />
                )}

                <Button type="submit" className="h-10 rounded-l-none border-none">
                  <SearchIcon className="h-5 w-5 text-muted-foreground text-white" />
                </Button>
              </form>
            </div>

            <div
              onClick={handleClose}
              role="button"
              className="select-none rounded-full p-1.5 transition hover:bg-gray-300/60 hover:opacity-75 hover:dark:bg-gray-700 md:ml-4 lg:ml-0"
            >
              <X className="text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
