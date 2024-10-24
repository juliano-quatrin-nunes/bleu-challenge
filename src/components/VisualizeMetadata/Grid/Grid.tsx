import styles from './Grid.module.css'
import InfoLabel from '../InfoLabel/InfoLabel'

interface GridProps {
  metadata: Record<string, string>
}

const Grid = ({ metadata }: GridProps) => {
  const metadataEntries = Object.entries(metadata ?? {})

  return (
    <div className={styles.metadataGrid}>
      {metadataEntries.length
        ? metadataEntries.map((record, index) => (
            <InfoLabel label={record[0]} key={index}>
              {record[1]}
            </InfoLabel>
          ))
        : 'This pool has no metadata'}
    </div>
  )
}

export default Grid
