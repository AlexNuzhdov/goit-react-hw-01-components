import React from 'react';
import user from './Profile//user.json';
import {Profile} from '../components/Profile/Profile';
import {Statistics} from '../components/Statistics/Statistics';
import data from './Statistics/data.json'
import {FriendList} from '../components/FriendList/FriendList';
import friends from './FriendList/friends.json';
import {TransactionHistory} from '../components/TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';


export function App() {
  return (
    <div>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
