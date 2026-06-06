import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

function TodoForm() {
  const addTodo = useTodoStore(
    (state) => state.addTodo
  );

  const todos = useTodoStore(
    (state) => state.todos
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    setError("");

    // Required validation
    if (!title.trim()) {
      setError("Task name is required");
      return;
    }

    // Only alphabets and spaces
    if (!/^[A-Za-z\s]+$/.test(title)) {
      setError(
        "Only alphabets and spaces are allowed"
      );
      return;
    }

    // Maximum 10 characters
    if (title.length > 10) {
      setError(
        "Task name cannot exceed 10 characters"
      );
      return;
    }

    // Duplicate validation
    const duplicate = todos.find(
      (todo) =>
        todo.title.toLowerCase() ===
        title.toLowerCase()
    );

    if (duplicate) {
      setError("Duplicate task not allowed");
      return;
    }

    addTodo(title, description);

    setTitle("");
    setDescription("");
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
    >
      <Text
        fontSize={{ base: "24px", md: "28px" }}
        fontWeight="700"
        color="#1F2937"
        mb={6}
      >
        Add New Task
      </Text>

      <Text
        fontWeight="600"
        color="#374151"
        mb={2}
      >
        Task Name
      </Text>

      <Input
        placeholder="Enter task name"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        size="lg"
        borderRadius="10px"
      />

      <Text
        fontSize="13px"
        color="gray.500"
        mt={2}
        mb={4}
      >
        {title.length} / 10
      </Text>

      <Text
        fontWeight="600"
        color="#374151"
        mb={2}
      >
        Description
      </Text>

      <Textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        size="lg"
        borderRadius="10px"
        resize="vertical"
      />

      {error && (
        <Text
          color="red.500"
          mt={3}
          fontSize="14px"
        >
          {error}
        </Text>
      )}

      <Button
        mt={6}
        colorScheme="green"
        size="lg"
        w="100%"
        onClick={handleAdd}
      >
        Add Task
      </Button>
    </Box>
  );
}

export default TodoForm;