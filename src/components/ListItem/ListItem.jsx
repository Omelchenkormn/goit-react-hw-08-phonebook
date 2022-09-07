import { Title, List, Span, Button, IconSVG } from './ListItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/fetchApi';
import Filter from 'components/FilterContact/Filter';
import { useFilter } from 'components/hook/useFilter';
import { useEffect } from 'react';

export const ListItem = () => {
  const [deleteContact, { isSuccess }] = useDeleteContactMutation();
  const { filterByName, filter, setFilter, refetch } = useFilter();

  useEffect(() => {
    refetch();
  }, [isSuccess, refetch]);

  const handeleDelete = async id => {
    await deleteContact(id);
  };

  return (
    <>
      <Filter value={filter} onChange={setFilter} />
      <Title>Contacts</Title>
      {filterByName &&
        filterByName.map(({ id, name, number }) => (
          <List key={id}>
            <Span>
              {name} : {number}{' '}
            </Span>
            <Button type="button" onClick={() => handeleDelete(id)}>
              <IconSVG />
            </Button>
          </List>
        ))}
    </>
  );
};
