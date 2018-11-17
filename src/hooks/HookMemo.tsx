import React from 'react';
import {useState, useMemo} from 'react';

const users = [
  'bob',
  'charles',
  'ragnhild',
  'patrick',
  'gerd',
  'andrew',
  'paul',
  'zelda'
];

export const HookMemo = () => {
  const [searchText, setSearchText] = useState('');
  
  const handleChange = (event: any) => {
    setSearchText(event.target.value);
  }
  
  // 1st param is a callback function, it returns a value
  // useMemo accepts array for 2nd param. Think of it as the 'dependencies' of the hook
  const filterUsers = (users: Array<String>, searchText: string) => {
    console.log('filterUsers() called')
    return users.filter(user => user.match(searchText));
  }
  
  const filteredUsers = useMemo(
    () => filterUsers(users, searchText),
    [users, searchText]
  )

  return (
    <div>
      <input value={searchText} onChange={handleChange} />
      {filteredUsers && filteredUsers.map((user, index) => 
        <p key={index}>{user}</p>
      )}
    </div>
  )
}
  

