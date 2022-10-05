import React from 'react'

const GithubTable = ({name,node_id,repo_url}) => {
  return (
    <tr>
        <td>
            {name}
        </td>
        <td>
            {node_id}
        </td>
        <td>
            {repo_url}
        </td>
    </tr>
  )
}

export default GithubTable
