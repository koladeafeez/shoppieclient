import { useState } from "react";
import { Input, FormGroup, FormControl } from "@material-ui/core";

export const CreateProduct = () => {
  const [files, setFiles] = useState([]);

  const fileSelectedHandler = (e) => {
    setFiles([...files, ...e.target.files]);
    console.log(e.target.files);
  };

  return (
    <form>
      <FormGroup>
        <FormControl>
          <Input type="text" placeholder="name"></Input>
        </FormControl>
      </FormGroup>

      <div>
        <h2>Upload images</h2>
      </div>
      <h3>Images</h3>

      <input type="file" multiple onChange={(e) => fileSelectedHandler(e)} />
    </form>
  );
};
