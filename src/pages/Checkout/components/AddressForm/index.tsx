import Zod from 'zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from './styles'
import { FlexBox } from '../../../../components/FlexBox'
import { MapPin, MapPinLine } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { useContext } from 'react'
import { OrdersContext } from '../../../../context/OrderContext'

export const setAddressFormSchema = zod.object({
  zipCode: zod.string().min(1, 'PLZ eingeben'),
  street: zod.string().min(1, 'Straßenname eingeben'),
  number: zod.string().min(1, 'Hausnummer eingeben'),
  complement: zod.string(),
  district: zod.string().min(1, 'Bezirk eingeben'),
  city: zod.string().min(1, 'Stadt eingeben'),
  state: zod.string().min(1, 'Kanton eingeben'),
})

export interface AddressFormProps {}

export type AddressFormData = Zod.infer<typeof setAddressFormSchema>

export const AddressForm: React.FC<AddressFormProps> = () => {
  const { addAddress } = useContext(OrdersContext)
  const { register, reset, handleSubmit } = useForm({
    resolver: zodResolver(setAddressFormSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  function onSubmit(values: AddressFormData) {
    addAddress(values)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FlexBox gap={1} alignItems="center">
        <MapPinLine size={45} weight="light" />
        <FlexBox direction="column">
          <h5>Lieferadresse</h5>
          <p>Geben Sie die Lieferadresse ein</p>
        </FlexBox>
      </FlexBox>

      <div className="inputs">
        <div className="left-column">
          <input
            type="text"
            placeholder="PLZ"
            aria-label="PLZ"
            {...register('zipCode')}
          />
        </div>
        <div className="input-line">
          <input
            type="text"
            id="z"
            placeholder="Straßenname"
            aria-label="Straßenname"
            {...register('street')}
          />
        </div>
        <div className="input-line">
          <div className="left-column">
            <input
              type="text"
              placeholder="Hausnummer"
              aria-label="Hausnummer"
              {...register('number')}
            />
          </div>
          <input
            type="text"
            placeholder="Wohnungsnummer"
            aria-label="Wohnungsnummer"
            {...register('complement')}
          />
        </div>
        <div className="input-line">
          <div className="left-column">
            <input
              type="text"
              placeholder="Bezirk"
              aria-label="Bezirk"
              {...register('district')}
            />
          </div>
          <input
            type="text"
            placeholder="Stadt"
            aria-label="Stadt"
            {...register('city')}
          />
          <div className="right-column">
            <input
              type="text"
              placeholder="Kanton"
              aria-label="Kanton"
              {...register('state')}
            />
          </div>
        </div>
      </div>
      <Button color="yellow" type="submit" size="lg">
        Adresse Bestätigen
      </Button>
    </Form>
  )
}
