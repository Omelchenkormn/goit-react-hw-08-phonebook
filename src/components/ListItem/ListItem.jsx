import { Title, List, Span, Button, IconSVG } from './ListItem.styled';
import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/fetchApi';
import Filter from 'components/FilterContact/Filter';
import { useFilter } from 'components/hook/useFilter';
import { useEffect } from 'react';

export const ListItem = () => {
  // const { data = [] } = useFetchContactsQuery();
  const [deleteContact, { isSuccess }] = useDeleteContactMutation();
  // const contacts = data;
  const { filterByName, filter, setFilter, status, refetch } = useFilter();

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
              {/* {isDeleting ? <ClipLoader size={10} /> : <IconSVG />} */}
            </Button>
          </List>
        ))}
    </>
  );
};
