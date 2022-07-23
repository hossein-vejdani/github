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
