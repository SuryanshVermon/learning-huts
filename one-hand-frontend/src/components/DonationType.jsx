import { Select, FormLabel } from "@chakra-ui/react";

export const DonationType = ({formLabel, onSelect, data}) => {
  return (
    <>
            <FormLabel>{formLabel}</FormLabel>
                <Select placeholder='Select Donation Type' onChange={onSelect} name="donationType" value={data}>
                    <option value="Blood">Bag And bottle</option>
                    <option value="Pads">Books</option>
                    <option value="Oxygen Cylinder">Stationary</option>
                    <option value="Medicines">Pads</option>
                    <option value="Others">Financial Help</option>
                </Select>
    </>
  )
}
