import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
      .trim()
      .min(2, 'The name must be at least 2 characters'),
  })
  
  export default formSchema;