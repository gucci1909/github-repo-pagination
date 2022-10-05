import React from 'react'
import GithubTable from './GithubTable';

const GithubRow = ({data,loading}) => {
  return (
   <table>
    <thead>
        <tr>
            <th>
                USERNAME
            </th>

            <th>
               NODE ID
            </th>
            <th>
              REPO URL
            </th>
        </tr>
    </thead>

<tbody>
  {loading && <tr>
    <td>
      ...Loading

    </td>
    
</tr>}
    {data&&data.map((el) => 
        <GithubTable key={el.id} name = {el.login} node_id={el.node_id} repo_url={el.repos_url}/>
    )}
</tbody>



   </table>

  )
}

export default GithubRow
