export type AutoCompleteOptionValueType = string | number | boolean

export type AutoCompleteOptionType = { label: string; value: AutoCompleteOptionValueType }

export type AutoCompletePropsType = {
    value: AutoCompleteOptionValueType
    items?: AutoCompleteOptionType[]
    multiple?: boolean
    isLoading?: boolean
    onChange: (value: string) => void
}
