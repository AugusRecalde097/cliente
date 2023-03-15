import CustomTextInfo from '../components/CustomTextInfo';
import CustomModal from './CustomModal';
import CustomButton from './button';

const TextInfo = CustomTextInfo(...props); 
const Button = CustomButton(...props);
const Modal = CustomModal(...props);

export default{
    Button,
    TextInfo,
    Modal,
};