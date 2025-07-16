import React from 'react'
import Button from './Button'

const Friend = ({friend , setSelectedFriend ,selectedFriend}) => {

    const isSelected = friend.id === selectedFriend?.id;

  return (
    <div>
      <li className={isSelected ? 'selected' :""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
            <p className='red'>
                You owe {friend.name} {Math.abs(friend.balance)}
            </p>
        )}
         {friend.balance > 0 && (
            <p className='green'>
                {friend.name} owes you  {friend.balance}
            </p>
        )} {friend.balance == 0 && (
            <p>
                You & {friend.name} are even
            </p>
        )}
        <Button onClick={()=>setSelectedFriend(friend)} >
            {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </div>
  )
}

export default Friend
