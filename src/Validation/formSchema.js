import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
      .trim()
      .min(2, 'The name must be at least 2 characters'),
    size: yup.string(),
    sauce: yup.string().required('Ya gotta have sauce'),
    specinst: yup.string(),
  })
  
  export default formSchema;