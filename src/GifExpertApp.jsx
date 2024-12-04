import { useState } from 'react'
import { Box, Container, Flex, Heading } from '@radix-ui/themes'

import { AddCategory, GifGrid } from './components';


const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const handleAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
  }

  const handleRemoveCategory = (category) => {
    const newCategories = categories.filter(c => c !== category)
    setCategories(newCategories)
  }

  return (
    <>
      <Container>
        <Flex direction="column" gap="5">
          <Box py="1">

            <Heading
              as='h1'
              size="8"
              align="center"
              weight="light">
              GifExpertApp
            </Heading>
          </Box>

          <AddCategory onNewCategory={handleAddCategory} />

          {
            categories.map(category => (
              <GifGrid key={category} category={category} onRemoveCategory={handleRemoveCategory} />
            ))
          }
        </Flex>
      </Container >
    </>
  )
}

export default GifExpertApp
