import { useState } from 'react';
import { Button, Container, Input, Label, SearchForm } from './Form.styled';
import { BsSearch } from 'react-icons/bs';
import { Notify } from 'notiflix';

export const Form = ({ Submit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return Notify.failure('Please enter youre query');
    }
    Submit(query);
    resetForm();
  };
  const resetForm = () => {
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch size="2rem" color="black" />
          <Label>Search</Label>
        </Button>
        <Input type="text" name="movie" value={query} onChange={handleChange} />
      </SearchForm>
    </Container>
  );
};
