import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup.string()
      .trim(),
    email: yup.string()
  })
  
  export default formSchema