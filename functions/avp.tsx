import {AnchorProvider, Program, useAnchorProvider} from '@coral-xyz/anchor'
import {AgriVerse} from '../types/agriverse'
import idl from '../idl/idl.json'

export function AgriVerseProvider(provider: AnchorProvider) => {
  return new Program(idl, provider)  
}

const provider = useAnchorProvider()