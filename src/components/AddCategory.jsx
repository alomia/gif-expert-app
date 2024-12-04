import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputValue.trim();
    if (newCategory.length <= 0) return;

    onNewCategory(newCategory);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField.Root
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        value={inputValue}
        placeholder="Buscar gifs"
        type='text'
        size="3">

        <TextField.Slot>
          <MagnifyingGlassIcon height="20" width="20" />
        </TextField.Slot>
      </TextField.Root>
    </form>
  )
}
