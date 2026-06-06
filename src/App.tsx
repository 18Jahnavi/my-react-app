import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Box
      minH="100vh"
      bg="#f5f6f8"
      p={8}
    >
      <Heading
        textAlign="center"
        mb={8}
        fontSize="40px"
        fontWeight="700"
      >
        Creative To-Do App
      </Heading>

      <Flex gap={6}>
        <Box flex={1}>
          <TodoForm />
        </Box>

        <Box flex={1}>
          <TodoList />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;