import React, { useContext , Component} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = ({users , loading})=>{
  console.log('loading===>',loading);
  if ( loading){
    return <Spinner />
  }else{
     return(
      <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user}/>
      )
      )}
      </div>
     );
  }
      }

























      
{
// const Users = () => {
//   const githubContext = useContext(GithubContext);
//   console.log('githubContext===>',githubContext);
//   const { loading, users } = githubContext;

//   if (loading) {
//     return <Spinner />;
//   } else {
//     return (
//       <div style={userStyle}>
//         {users.map(user => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   }
// };

}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;