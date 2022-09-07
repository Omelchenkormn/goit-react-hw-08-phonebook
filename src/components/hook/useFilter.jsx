import { useState, useMemo } from 'react';
import { useFetchContactsQuery } from 'redux/contacts/fetchApi';

export const useFilter = () => {
  const { data = [], status, refetch } = useFetchContactsQuery();

  const contacts = data;
  const [filter, setFilter] = useState('');

  const filterByName = useMemo(() => {
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalaizedFilter)
    );
  }, [filter, contacts]);

  return { filterByName, filter, setFilter, status, refetch };
};
