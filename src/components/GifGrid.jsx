import { Box, Button, Flex, Spinner } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";


export const GifGrid = ({ category, onRemoveCategory }) => {

  const { gifs, isLoading } = useFetchGifs(category);

  const handleClick = () => {
    onRemoveCategory(category)
  }

  return (
    <>
      {
        isLoading
          ?
          <Flex justify="center">
            <Spinner size="3" />
          </Flex>
          :
          <>
            {
              gifs.length > 0
                ? <Box>
                  <Button variant="soft" color="cyan">
                    {category}
                    <Cross2Icon style={{
                      cursor: "pointer"
                    }} onClick={handleClick} />
                  </Button>
                </Box>
                : null
            }

            <Flex gap="3" wrap="wrap" justify="between">
              {

                gifs.map(gif =>
                  <GifItem key={gif.id} {...gif} />
                )
              }
            </Flex>
          </>
      }
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  onRemoveCategory: PropTypes.func.isRequired
}
