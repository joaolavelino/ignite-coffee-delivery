import Zod from 'zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from './styles'
import { FlexBox } from '../../../../components/FlexBox'
import { MapPin, MapPinLine } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'

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
  const setAddressForm = useForm({
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

  return (
    <Form>
      <FlexBox gap={1} alignItems="center">
        <MapPinLine size={45} weight="light" />
        <FlexBox direction="column">
          <h5>Lieferadresse</h5>
          <p>Geben Sie die Lieferadresse ein</p>
        </FlexBox>
      </FlexBox>

      <div className="inputs">
        <div className="left-column">
          <input type="text" name="" id="" placeholder="PLZ" />
        </div>
        <div className="input-line">
          <input type="text" name="" id="" placeholder="Straßenname" />
        </div>
        <div className="input-line">
          <div className="left-column">
            <input type="text" name="" id="" placeholder="Hausnummer" />
          </div>
          <input type="text" name="" id="" placeholder="Wohnungsnummer" />
        </div>
        <div className="input-line">
          <div className="left-column">
            <input type="text" name="" id="" placeholder="Bezirk" />
          </div>
          <input type="text" name="" id="" placeholder="Stadt" />
          <div className="right-column">
            <input type="text" name="" id="" placeholder="Kanton" />
          </div>
        </div>
      </div>
      <Button color="yellow" type="submit" size="lg">
        Adresse Bestätigen
      </Button>
    </Form>
  )
}
