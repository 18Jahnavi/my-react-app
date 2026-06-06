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

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [error, setError] =
    useState("");

  const handleAdd = () => {
    setError("");

    if (!title.trim()) {
      setError("Task name is required");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(title)) {
      setError(
        "Only alphabets and spaces are allowed"
      );
      return;
    }

    if (title.length > 10) {
      setError(
        "Task name cannot exceed 10 characters"
      );
      return;
    }

    const duplicate = todos.find(
      (todo) =>
        todo.title.toLowerCase() ===
        title.toLowerCase()
    );

    if (duplicate) {
      setError(
        "Duplicate task not allowed"
      );
      return;
    }

    addTodo(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <Box
      bg="white"
      p={6}
      borderRadius="12px"
      border="1px solid"
      borderColor="gray.200"
    >
      <Text
        fontSize="26px"
        fontWeight="700"
        mb={6}
      >
        Add New Task
      </Text>

      <Text
        fontWeight="600"
        mb={2}
      >
        Task Name
      </Text>

      <Input
        placeholder="Enter task"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <Text
        mt={2}
        color="gray.500"
      >
        {title.length} / 10
      </Text>

      <Text
        mt={5}
        mb={2}
        fontWeight="600"
      >
        Description
      </Text>

      <Textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
      />

      {error && (
        <Text
          color="red.500"
          mt={3}
        >
          {error}
        </Text>
      )}

      <Button
        mt={5}
        colorScheme="green"
        onClick={handleAdd}
      >
        Add Task
      </Button>
    </Box>
  );
}

export default TodoForm;