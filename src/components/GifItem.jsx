import PropTypes from "prop-types"
import { Box, Card, Inset, Text } from "@radix-ui/themes"


export const GifItem = ({title, url}) => {
  return (
    <Box maxWidth="240px">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={url}
            alt={title}
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="2">
          {title}
        </Text>
      </Card>
    </Box>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired, 
  url: PropTypes.string.isRequired
}
