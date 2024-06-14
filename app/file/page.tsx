'use client'
// https://www.youtube.com/watch?v=ixgxx_um8r8

import { useState } from "react";


const fileStructure = {
  folder : [
    {
      name: 'app',
      folder: [
        {
          name: 'components',
          folder: [
            { name: 'AddTodo.tsx'},
            { name: 'ListOfTodos.tsx'},
            { name: 'Navbar.tsx'},
          ]
        }
      ]
    },
    {
      name: 'package.json'
    },
    {
      name: 'tsconfig.json'
    }
  ]
}

interface TEntry {
  name: string,
  folder?: TEntry[]
}

function expandable(entry, isExpanded) {
  if (!entry.folder) {
    return
  }

  return isExpanded ? '- ': '+ '
}

function Entry({entry, depth} : {entry: TEntry, depth: number}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div style={{padding: `${depth * 10}px`}}>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {expandable(entry,isExpanded)}
        {entry.name}
      </button>
      {isExpanded && entry.folder?.map((entryInner, id) => (
        <div key={id}>
          <Entry entry={entryInner} depth={depth} />
        </div>
      ))}
    </div>
  )
}


function file() {
  return (
    fileStructure.folder.map((entry,id) => (
      <div key={id} className="text-white">
        <Entry entry={entry} depth={1} />
      </div>
    ))
  )
}




export default file





















// type TEntry = {
//   name: string;
//   folder?: TEntry[];
// }

// function expandElement(entry, isExpanded) {
//   if (!isExpanded && entry.folder) {
//     return '+ '
//   }

//   return entry.folder && '- '
// }

// function Entry ({entry, depth}: {entry : TEntry, depth: number}) {
//   const [isExpanded, setIsExpanded] = useState(false)

//   return (
//     <div>
//       <button onClick={() => setIsExpanded(!isExpanded)}>
//         {expandElement(entry, isExpanded)}
//         {entry.name}  
//       </button>
//       {isExpanded && 
//         <div style={{paddingLeft: `${depth * 10}px`}}>
//           {entry.folder?.map((entry1,i) => (
//             <div key={i}>
//               <Entry entry={entry1} depth={depth * 10} />
//             </div>
//           ))}
//         </div>
//       } 
//     </div>
//   )
// }

// function file() {
//   return (
//     <div className="text-white">
//       {fileStructure.folder.map((entry, id) => {
//         return (
//           <div key={id}>
//             <Entry entry={entry} depth={1} />
//           </div>
//         )
//       })}
//       {/* <p>{JSON.stringify(fileStructure.root)}</p> */}
//     </div>
//   )
// }