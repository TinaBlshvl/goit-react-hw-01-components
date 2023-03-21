export const FriendListItem = ({ avatar, name }) => {
  return (
    <>
      {/* <span>
        <FcApproval />
      </span> */}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};
