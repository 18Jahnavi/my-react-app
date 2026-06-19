import { Box, Flex, Heading } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Box
      minH="100vh"
      bg="#F5F7FA"
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 6, md: 8 }}
    >
      {/* Title */}

      <Heading
        textAlign="center"
        fontSize={{ base: "30px", md: "38px", lg: "42px" }}
        fontFamily={"Helonik Regular"}
        fontWeight="700"
        color="#1F2937"
        mb={10}
      >
        Creative To-Do App
      </Heading>

      {/* Responsive Layout */}

      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={8}
        align="flex-start"
      >
        {/* Left Side */}

        <Box flex="1" w="100%">
          <TodoForm />
        </Box>

        {/* Right Side */}

        <Box flex="1" w="100%">
          <TodoList />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;