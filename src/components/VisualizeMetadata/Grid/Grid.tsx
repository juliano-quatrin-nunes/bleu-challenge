import styles from './Grid.module.css'
import InfoLabel from '../InfoLabel/InfoLabel'

interface GridProps {
  metadata: Record<string, string>
}

const Grid = ({ metadata }: GridProps) => {
  return (
    <div className={styles.metadataGrid}>
      {metadata
        ? Object.entries(metadata).map((record, index) => (
            <InfoLabel label={record[0]} key={index}>
              {record[1]}
            </InfoLabel>
          ))
        : 'Loading metadata info...'}
    </div>
  )
}

export default Grid
