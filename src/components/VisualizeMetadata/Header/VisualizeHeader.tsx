import Button from '@/components/Button/Button'
import { QueryKey, useQueryClient } from '@tanstack/react-query'
import styles from './VisualizeHeader.module.css'

interface VisualizeHeaderProps {
  toggleEditMode: () => void
  queryKey: QueryKey
}

const VisualizeHeader = (props: VisualizeHeaderProps) => {
  const { toggleEditMode, queryKey } = props

  const queryClient = useQueryClient()
  const handleReload = () => queryClient.invalidateQueries({ queryKey })

  return (
    <div className={styles.spaceBetweenRow}>
      <h3 className={styles.title}>View Metadata</h3>
      <div>
        <Button onClick={handleReload}>Reload</Button>
        <Button primary onClick={toggleEditMode} className={styles.reload}>
          Edit
        </Button>
      </div>
    </div>
  )
}

export default VisualizeHeader
