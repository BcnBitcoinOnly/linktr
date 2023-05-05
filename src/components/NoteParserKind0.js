import React from 'react'
import { nip19 } from "nostr-tools";
import { GoOut, LnIcon, GoChat} from "../graphics/index.js";
const NoteParserKind0 = ({note}) => {
  const nPub=nip19.npubEncode(note.pubkey)
  const contentObj = JSON.parse(note.content);
  const { lud16, display_name, name, about, picture, banner } = contentObj;
  
  return (
    <div className='noteContainerKind0'>
      <h2>{name}</h2>
      <p>{about}</p>
      <a href={process.env.REACT_APP_NOSTR_OUTER_PROFILES+nPub} target="_blank" rel="noreferrer" >
      <code style={{ textDecoration: 'none' }}>{nPub.slice(0, 16)}...</code>
      </a>
      <hr />
      <div className='noteButtonBox'>
        <a href={`lightning:${lud16}`} target="_blank" rel="noreferrer"><LnIcon className="svg-src"/></a>
        <a href={process.env.REACT_APP_NOSTR_OUTER_CHAT+nPub} target="_blank" rel="noreferrer"><GoChat className="svg-src"/></a>
        <a href={process.env.REACT_APP_NOSTR_OUTER_PROFILES+nPub} target="_blank" rel="noreferrer"><GoOut className="svg-src"/></a>
      </div>
    </div>
  )
}

export default NoteParserKind0
