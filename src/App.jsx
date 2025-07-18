
import { useState } from 'react';
import Button from './Components/Button';
import FormAddFriend from './Components/FormAddFriend';
import FormSplitBill from './Components/FormSplitBill';
import FriendList from './Components/FriendList';


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {
  const [showAddFriend,setShowAddFriend] = useState(false);

  const [friends,setFriends] = useState(initialFriends)

  const handleShowAddFriend = ()=>{
    setShowAddFriend((show)=>!show);
  }


  const handleAddFriend = (friend)=>{
    setFriends(friends => [...friends,friend]);
    setShowAddFriend(false);
    }
const [selectedFriend,setSelectedFriend] = useState(null)

function handleSelectedFriend(friend){
  setSelectedFriend((cur)=> 
    cur?.id === friend.id ? null : friend);
  setShowAddFriend(false);

}
function handleSplitBill(value){

  setFriends((friends)=>
    friends.map((friend)=>
      friend.id===selectedFriend.id 
        ? {...friend,balance:friend.balance+value}
        : friend))
    setSelectedFriend(null);    
}  

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList friends={friends} setSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend} />
        { showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend} >{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      { selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  )
}

export default App
