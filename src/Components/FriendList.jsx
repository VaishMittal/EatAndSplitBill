import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends ,setSelectedFriend ,selectedFriend }) => {
  //const friends = friends;
  return (
    <div>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} setSelectedFriend={setSelectedFriend} selectedFriend={selectedFriend} />
      ))}
    </div>
  );
};

export default FriendList;
