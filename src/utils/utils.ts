export type Metadata = {
  name: string
  value: string
}

export type FormValues = {
  metadata: Metadata[]
}

export const convertRecordToMetadataArray = (metadata: Record<string, string>): Metadata[] => {
  const entries = Object.entries(metadata)
  return entries.map((record) => ({ name: record[0], value: record[1] }))
}

export const metadataArrayToRecord = (metadata: Metadata[]): Record<string, string> => {
  return metadata.reduce((acc, curr) => {
    acc[curr.name] = curr.value
    return acc
  }, {} as Record<string, string>)
}

export const contractId = '0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02'
