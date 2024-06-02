export interface Word {
  license: { name: string; url: string }
  meanings: Meaning[]
  phonetic: string
  phonetics: Phonetic[]
  sourceUrls: string[]
  word: string
}

export interface Meaning {
  definitions: Definition[]
  antonyms: string[]
  partOfSpeech: string
  synonyms: string[]
}

export interface Definition {
  antonyms: string[]
  synonyms: string[]
  definition: string
  example?: string
}

export interface Phonetic {
  audio: string
  license: { name: string; url: string }
  sourceUrl: string
}
