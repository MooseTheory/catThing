import { Button, TextField } from '@material-ui/core';
import React from 'react';

type Props = {
  saveCat: (cat: ICat | any) => void,
};

const AddCat: React.FC<Props> = ({ saveCat }) => {
  const [cat, setCat] = React.useState<ICat | {}>()

  const handleCatData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCat({
      ...cat,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewCat = (e: React.FormEvent) => {
    e.preventDefault();
    saveCat(cat);
  }

  return (
    <>
      <form className="addCat">
        <TextField
          required
          id="name"
          label="Name"
          placeholder="Pixel"
          onChange={handleCatData} />
        <TextField
          required
          id="color"
          label="Color"
          placeholder="black and white"
          onChange={handleCatData} />
        <TextField
          required
          id="age"
          label="Age"
          placeholder="6"
          helperText="Age in years"
          onChange={handleCatData} />
        <Button
          disabled={cat === undefined}
          variant="contained"
          onClick={addNewCat}>Submit</Button>
      </form>
    </>
  )
}

export default AddCat;
