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
        <div className="grid grid-cols-1 items-center justify-items-center  h-screen">
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              className="mb-10 grid h-28 place-items-center bg-blue-500"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
              <label className=''>Name:</label>
              <Input
                size="lg"
                type="text"
                name="name"
                value={values.name}
                onChange={onChange}
              />
              <label className=''>Password:</label>
              <Input 
                size="lg"
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
              />
              <label>Image URL address</label>
              <Input
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
                className='bg-blue-500 text-sm'
                onClick={() => dispatch(login(values))}
              >
                LOG IN
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


