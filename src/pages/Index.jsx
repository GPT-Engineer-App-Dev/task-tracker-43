import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, IconButton, Checkbox, StackDivider } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Add a new todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" &amp;&amp; addTodo()} />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack divider={<StackDivider borderColor="gray.200" />} borderColor="gray.200" borderWidth="2px" borderRadius="md" padding={4} width="100%" alignItems="stretch">
          {todos.length === 0 ? (
            <Text>No todos yet!</Text>
          ) : (
            todos.map((todo, index) => (
              <HStack key={index} spacing={4}>
                <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} />
                <Text as={todo.completed ? "s" : ""} flex="1">
                  {todo.text}
                </Text>
                <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => deleteTodo(index)} />
              </HStack>
            ))
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;