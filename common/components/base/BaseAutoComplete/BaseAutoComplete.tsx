import { ChangeEvent, useMemo, useRef, useState } from "react"
import { Badge, Box, Input, InputGroup, InputLeftAddon, InputRightElement, List, ListItem, Spinner, useColorModeValue, useOutsideClick } from "@chakra-ui/react"
import style from './BaseAutoComplete.module.scss'
import { ChevronDownIcon } from "@chakra-ui/icons"

export type AutoCompleteOptionValueType = string | number | boolean

export type AutoCompleteOptionType = { label: string; value: AutoCompleteOptionValueType }

export type AutoCompletePropsType = {
  value: AutoCompleteOptionValueType
  items?: AutoCompleteOptionType[]
  selectedItems?: Set<AutoCompleteOptionValueType>
  multiple?: boolean
  isLoading?: boolean
  onChange: (value: string) => void
  onSelect: (value: Set<AutoCompleteOptionValueType>) => void
}

const BaseAutoComplete = ({ value, isLoading, items = [], selectedItems = new Set(), multiple, onChange, onSelect }: AutoCompletePropsType) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null)

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  })


  const selectItem = (value: AutoCompleteOptionValueType) => {

    if (selectedItems.has(`${value}`)) {
      selectedItems.delete(`${value}`)
      return onSelect(new Set(selectedItems))
    }

    if (multiple)
      return onSelect(new Set(selectedItems.add(value)))

    return onSelect(new Set([value]))
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
      borderBottom='1px'
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      bg={(selectedItems.has(`${item.value}`)) ? useColorModeValue('blue.300', 'blue.500') : useColorModeValue('white', 'gray.900')}
      key={`${item.value}`}
    >
      {item.label}
    </ListItem>
  )), [value, items, selectedItems])

  const selectedItemsElements = useMemo(() =>
    Array.from(selectedItems).map((item) => <Badge key={`${item}`}>{item}</Badge>
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
      <Box className={style['autocomplete__list']} boxShadow='2xl' borderRadius='md'>
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