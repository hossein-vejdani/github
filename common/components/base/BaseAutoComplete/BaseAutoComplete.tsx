import { ChangeEvent, useMemo, useRef, useState } from "react"
import { Badge, Box, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, List, ListItem, Spinner, useOutsideClick } from "@chakra-ui/react"
import type { AutoCompleteOptionType, AutoCompleteOptionValueType, AutoCompletePropsType } from "@/common/types/autocomplete.type"
import style from './BaseAutoComplete.module.scss'
import { ChevronDownIcon } from "@chakra-ui/icons"

const BaseAutoComplete = ({ value, isLoading, items = [], multiple, onChange }: AutoCompletePropsType) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null)

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  })


  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const selectItem = (value: AutoCompleteOptionValueType) => {

    if (selectedItems.has(`${value}`))
      return setSelectedItems((prev) => {
        prev.delete(`${value}`)
        return new Set(prev)
      })

    if (multiple)
      return setSelectedItems((prev) => new Set(prev.add(`${value}`)))

    return setSelectedItems(new Set([`${value}`]))
  }


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    onChange(inputValue)
  }

  const options = useMemo(() => items.map((item, index) => (
    <ListItem
      className={style['autocomplete__list-item']}
      onClick={() => selectItem(item.value)}
      px={2}
      py={1}
      cursor='pointer'
      borderBottom='1px solid rgba(0,0,0,0.01)'
      bg={(selectedItems.has(item.value)) ? 'blue.50' : 'white'}
      key={`${item.value}`}
    >
      {item.label}
    </ListItem>
  )), [value, items, selectedItems])

  const selectedItemsElements = useMemo(() =>
    Array.from(selectedItems).map((item) => <Badge key={item}>{item}</Badge>
    ), [selectedItems])

  return (
    <div className={style['autocomplete']} ref={ref}>
      <InputGroup>
        {selectedItems.size && <InputLeftAddon bg='inherit' width='auto'>
          {selectedItemsElements}
        </InputLeftAddon>}
        <Input value={`${value}`} onChange={handleInputChange} onFocus={() => setIsOpen(true)} autoComplete="off" />
        <InputRightElement>
          {isLoading ? <Spinner /> :
            <ChevronDownIcon color='gray.500' />
          }
        </InputRightElement>
      </InputGroup>
      <Box className={style['autocomplete__list']}>
        {!isLoading &&
          <List
            bg='white'
            borderRadius='4px'
            boxShadow='md'
          >
            {isOpen &&
              options
            }
          </List>
        }
      </Box>
    </div>
  )
}

export default BaseAutoComplete