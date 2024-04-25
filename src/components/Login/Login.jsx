import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { Button } from "@material-tailwind/react";
  import { Input } from "@material-tailwind/react";
  import { login } from "../../Features/Slices/authSlice";
  import { useDispatch } from "react-redux";

const Login = () => {

    const initialState = {
        name: "",
        password: "",
        image: "",
    };

    const [values, setValues] = useState(initialState);

    const onChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-1 items-center justify-items-center h-screen">
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              className="mb-10 grid h-28 place-items-center bg-blue-500"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-6">
              <Input
                label="Name"
                size="lg"
                type="text"
                name="name"
                value={values.name}
                onChange={onChange}
              />
              <Input
                label="Password" 
                size="lg"
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
              />
              <Input
                label="Image URL address"
                size="lg"
                type="text"
                name="image"
                value={values.image}
                onChange={onChange}
              />
              <div className="-ml-2.5"></div>
            </CardBody>
            <CardFooter className="pt-4">
              <Button
                variant="gradient"
                fullWidth
                className='bg-blue-500'
                onClick={() => dispatch(login(values))}
              >
                SIGN IN
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Image is optional
              </Typography>
            </CardFooter>
          </Card>
        </div>
      )
    
    
    }
  


export default Login;


