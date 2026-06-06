import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
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

    const newTitle =
      prompt("Edit Task", title);

    if (!newTitle) return;

    const newDescription =
      prompt(
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
      p={6}
      borderRadius="12px"
      border="1px solid"
      borderColor="gray.200"
      minH="500px"
    >
      <Text
        fontSize="26px"
        fontWeight="700"
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
              borderRadius="10px"
              border="1px solid"
              borderColor="gray.200"
            >
              <Text
                fontWeight="700"
                fontSize="18px"
              >
                {todo.title}
              </Text>

              <Text mt={2}>
                {todo.description}
              </Text>

              <HStack mt={4}>
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
                    deleteTodo(
                      todo.id
                    )
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