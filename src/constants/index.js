import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const socialLinks = [
  {
    icon: AiOutlineGithub,
    url: 'https://github.com/Pape98',
    title: 'github',
    color: 'white',
  },
  {
    icon: AiFillLinkedin,
    url: 'https://www.linkedin.com/in/pape-sow-traore/',
    title: 'linkedIn',
    color: 'blue.500',
  },
  {
    icon: AiOutlineMail,
    url: 'mailto: papisline2222@gmail.com',
    title: 'email',
    color: 'orange.500',
  },
];

const defaultProjectImage =
  'https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80';

export { defaultProjectImage, socialLinks };
