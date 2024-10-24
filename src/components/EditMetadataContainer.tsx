import { PinMutationReponse, usePinJsonToIpfs } from '@/hooks/pinata'
import { abi } from '@/utils/abi'
import { contractId, convertRecordToMetadataArray, FormValues, metadataArrayToRecord } from '@/utils/utils'
import { Form, Formik } from 'formik'
import { Hex } from 'viem'
import { useWriteContract } from 'wagmi'
import Footer from './EditMetadata/Footer/Footer'
import EditHeader from './EditMetadata/Header/EditHeader'
import List from './EditMetadata/List/List'
import { useUpdateMetadataCid } from '@/hooks/poolMetadataContract'

interface EditMetadataContainerProps {
  metadata: Record<string, string>
  toggleEditMode: () => void
  poolId: Hex
}

const EditMetadataContainer = (props: EditMetadataContainerProps) => {
  const { metadata, toggleEditMode, poolId } = props

  const { mutate } = usePinJsonToIpfs()
  const { writeCidToContract } = useUpdateMetadataCid(poolId)

  const initialValues = convertRecordToMetadataArray(metadata)

  const writeCidToPool = (data: PinMutationReponse) => writeCidToContract(data.IpfsHash, toggleEditMode)

  const handleSubmit = (values: FormValues) => {
    const metadata = metadataArrayToRecord(values.metadata)
    mutate(metadata, { onSuccess: writeCidToPool })
  }

  return (
    <Formik<FormValues> initialValues={{ metadata: initialValues }} onSubmit={handleSubmit} onReset={toggleEditMode}>
      {() => (
        <Form>
          <EditHeader />
          <List />
          <Footer />
        </Form>
      )}
    </Formik>
  )
}

export default EditMetadataContainer
