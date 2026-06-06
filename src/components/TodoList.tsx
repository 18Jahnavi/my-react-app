import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useTodoStore } from "../store/todoStore";

function TodoList() {
  const {
    todos,
    deleteTodo,
    editTodo,
  } = useTodoStore();

  const handleEdit = (
    id: number,
    title: string,
    description: string
  ) => {
    const newTitle = prompt(
      "Edit Task Name",
      title
    );

    if (!newTitle) return;

    // Validation
    if (!/^[A-Za-z\s]+$/.test(newTitle)) {
      alert(
        "Only alphabets and spaces are allowed"
      );
      return;
    }

    if (newTitle.length > 10) {
      alert(
        "Task name cannot exceed 10 characters"
      );
      return;
    }

    const duplicate = todos.find(
      (todo) =>
        todo.id !== id &&
        todo.title.toLowerCase() ===
          newTitle.toLowerCase()
    );

    if (duplicate) {
      alert("Duplicate task not allowed");
      return;
    }

    const newDescription = prompt(
      "Edit Description",
      description
    );

    editTodo(
      id,
      newTitle,
      newDescription || ""
    );
  };

  return (
    <Box
      bg="white"
      p={{ base: 4, md: 6 }}
      borderRadius="16px"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      w="100%"
      minH="500px"
    >
      <Text
        fontSize={{ base: "24px", md: "28px" }}
        fontWeight="700"
        color="#1F2937"
        mb={6}
      >
        Your Tasks
      </Text>

      {todos.length === 0 ? (
        <Text color="gray.500">
          No tasks available
        </Text>
      ) : (
        <VStack
          spacing={4}
          align="stretch"
        >
          {todos.map((todo) => (
            <Box
              key={todo.id}
              p={4}
              borderRadius="12px"
              border="1px solid"
              borderColor="gray.200"
              bg="gray.50"
            >
              <Text
                fontSize="18px"
                fontWeight="700"
                color="#111827"
              >
                {todo.title}
              </Text>

              <Text
                mt={2}
                color="gray.600"
                fontSize="15px"
              >
                {todo.description ||
                  "No description"}
              </Text>

              <HStack
                mt={4}
                spacing={3}
                flexWrap="wrap"
              >
                <Button
                  size="sm"
                  colorScheme="blue"
                  onClick={() =>
                    handleEdit(
                      todo.id,
                      todo.title,
                      todo.description
                    )
                  }
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() =>
                    deleteTodo(todo.id)
                  }
                >
                  Delete
                </Button>
              </HStack>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
}

export default TodoList;