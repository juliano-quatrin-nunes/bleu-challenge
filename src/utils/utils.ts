export type Metadata = {
  name: string;
  value: string;
};

export const convertRecordToMetadataArray = (
  metadata: Record<string, string>
): Metadata[] => {
  const entries = Object.entries(metadata);
  return entries.map((record) => ({ name: record[0], value: record[1] }));
};
